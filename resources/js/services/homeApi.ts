import axios, { Axios, AxiosResponse } from "axios";
import { resolve } from "path";
import { ILoginData, IRegisterData, LoginResult, RegisterResult } from "../interfaces/auth";
import { IAirportdata } from "../interfaces/cms/airportdata";

class HomeApi {
    getairportdata() {
        return new Promise<Array<IAirportdata>>((resolve, reject) => {
            console.log("get airport data");
            axios.get('/api/getairport').then((result :  AxiosResponse<Array<IAirportdata>>) => {
                console.log(result.data);
                resolve (result.data )
            }).catch((err) => {
                reject(err)
            })
        })
    }
    
}

export const homeApi = new HomeApi();
