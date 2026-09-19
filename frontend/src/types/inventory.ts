//1. strict category union type
export type ItemCategory = "laptops" | "smartphones" | "audio" | "accessories";

//2. base input contract (what the user enters in the form)
export interface NewItemInput {
    title: string;
    price: number;
    category: ItemCategory;
    isOffer: boolean;
    description?: string;   //an optional property, may be a string, or may be undefined
}

//3. complete domain model (what lives in the db & renders on cards)
export interface Item extends NewItemInput {    //just like OOP class inheritence, an interface can inherit from another using (extends)
    readonly id: number;    //readonly prevents accidental mutation of important keys (e.g db IDs), therefore, cannot be accidentally reassigned or changed after creation
}

//4. API response contract (what DummyJSON or FastAPI returns)
export interface CloudApiResponse {
    products: Item[];
    total: number;
    skip: number;
    limit: number;
}