//centralised network service with strict return types

import { Item, ItemCategory, NewItemInput } from "../types/inventory";
import { getStoredToken } from "./auth";

//1. raw product shape returned by DummyJSON API
export interface DummyProduct{
    id: number;
    title: string;
    price: number;
    discountPercentage: number;
    category: string;
}

export interface DummyApiResponse{
    products: DummyProduct[];
    total: number;
    skip: number;
    limit: number;
}

const BASE_URL = 'https://dummyjson.com/products';

/**
 * 2. generic API Fetch wrapper
 * the `<T>` is a type placeholder
 * whatever type you ask for, apiFetch guarentees you get back in a Promise
 */

/*
export async function apiFetch<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`API Error [${response.status}]: ${response.statusText}`);
    }

    const data: T = await response.json();
    return data;
    
}
*/

//Day 36
export async function apiFetch<T>(url:string, options: RequestInit = {}): Promise<T> {
    const token = getStoredToken();

    //clone existing headers or create new ones
    const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        ...(options.headers as Record<string, string>),
    };

    //if user is logged in, attach Authorization: Bearer <token>!
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    
    const response = await fetch(url, {
        ...options,
        headers,
    });

    if (!response.ok) {
        throw new Error(`API Error [${response.status}]: ${response.statusText}`);
    }
    const data: T = await response.json();
    return data;
    }
    

//-----------------
//  CRUD HELPERS
//-----------------

/**
 * 3. fetch inventory products (GET)
 * returns a strongly-typed Promise<Item[]>
 */
export async function fetchInventoryItems(): Promise<Item[]> {
    const data = await apiFetch<DummyApiResponse>(`${BASE_URL}/category/laptops`);

    return data.products.map((product) => ({
        id: product.id,
        title: product.title,
        price: Math.round(product.price * 4.4), //converts USD to MYR
        isOffer: product.discountPercentage > 10,
        category: (product.category as ItemCategory) || 'laptops',
    }));
}

/**
 * 4. create a new product on the cloud API (POST)
 */
export async function createCloudItem(input:NewItemInput): Promise<Item> {
    const created = await apiFetch<DummyProduct>(`${BASE_URL}/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: input.title,
            price: input.price,
            category: input.category,
            discountPercentage: input.isOffer ? 15:0,
        }),
    });

    return {
        id: created.id || Date.now(),
        title: created.title,
        price: created.price,
        category: (created.category as ItemCategory) || input.category,
        isOffer: input.isOffer,
    };
}

/**
 * 5. toggle sale status on cloud API (PUT)
 */
export async function toggleCloudSale(id: number, currentIsOffer: boolean): Promise<boolean> {
    const newSaleStatus = !currentIsOffer;

    await apiFetch<DummyProduct>(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            discountPercentage: newSaleStatus ? 20:0,
        }),
    });

    return newSaleStatus;
}

/**
 * 6. delete product from cloud API (DELETE)
 */

export async function deleteCloudItem(id:number): Promise<{id: number; isDeleted: boolean}> {
    return await apiFetch<{id: number; isDeleted: boolean}>(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
}