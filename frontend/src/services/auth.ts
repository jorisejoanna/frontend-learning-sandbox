//this script handles JWT storage in localStorage, login, registration, and logout

import { AuthResponse, LoginCredentials, RegisterCredentials, User } from "../types/auth";

const TOKEN_KEY = 'inventory_auth_token';
const USER_KEY = 'inventory_auth_user';

//1. token storage helpers (browser localStorage)
export function getStoredToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken (token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
}

export function getStoredUser(): User | null {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
}

export function setStoredUser(user: User): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearStoredAuth(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
}

//2. login function (ready for DummyJSON/FastAPI)
export async function loginUser(credentials: LoginCredentials): Promise<{user: User; token: string}> {
    
    //simulate a real cloud JWT (will connect this to FastAPI on Day 39)
    //simulatinh network delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (!credentials.email || !credentials.password) {
        throw new Error('Please provide both email and password!');
    }

    //create mock token & user
    const mockToken = `mock_jwt_${Date.now()}_${btoa(credentials.email)}`;
    const user: User = {
        email: credentials.email,
        is_active: true,
    };

    //persist to localStorage so refresh doesn't log you out
    setStoredToken(mockToken);
    setStoredUser(user);

    return {user, token: mockToken};
}

//3. logout function
export function logoutUser(): void {
    clearStoredAuth();
}