import axios, { AxiosResponse } from "axios";
import { resolve } from "path";
import { ILoginData, IRegisterData, LoginResult, RegisterResult } from "../interfaces/auth";

class AuthApi {

    register(userData: IRegisterData) {
        return new Promise<RegisterResult>((resolve, reject) => {
            axios.post('/api/register', userData).then((result: AxiosResponse<RegisterResult>) => {
                resolve(result.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
    login(loginData: ILoginData) {
        return new Promise<LoginResult>((resolve, reject) => {
            console.log(loginData)
            axios.post('/api/login', loginData).then((result: AxiosResponse<LoginResult>)=>{
                resolve(result.data)
            }).catch((err)=>{
                reject(err)
            })
        })
    }
    logout(){
            console.log('logout');
            axios.get('/api/logout').then().catch();
    }
}

export const authApi = new AuthApi();
