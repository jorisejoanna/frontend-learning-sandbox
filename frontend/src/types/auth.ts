//this script defines what users, credentials, and tokens look like in TypeScript

//1. what the user types into the Login form
export interface LoginCredentials {
    email: string;
    password: string;
}

//2. what the user types into the Registration form
export interface RegisterCredentials extends LoginCredentials {
    confirmPassword? : string;
}

//3. what the FastAPI backend returns on sucessful login (/token/)
export interface AuthResponse {
    access_token: string;
    token_type: string;
}

//4. current authenticated user profile
export interface User {
    id?: number;
    email: string;
    is_active?: boolean;
}

//5. Auth State contract for React (who is logged in right now?)
//if you are
//logged in | logged out
export interface AuthState {
    user: User | null;          //user is {email:"joanna@example.com"} | user is null
    token: string | null;       //token is "ejhHHG1J988..." | token is null
    isAuthenticated: boolean;   //true | false
    isLoading: boolean;         
}