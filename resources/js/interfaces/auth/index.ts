export interface IRegisterData {
    email: string;
    password: string;
}
export interface RegisterResult {
    user: JSON,
    token: string,
    message: string
}
export interface ILoginData {
    email: string;
    password: string;
}
export interface LoginResult {
    user: JSON,
    token: string,
    message: string
}
export interface IUserData {
    name: string;
    email: string;
    password: string;
    
}