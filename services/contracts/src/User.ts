export interface UserResponse {
    user: User;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    cognito_id: string;
    created_at: string;
}
