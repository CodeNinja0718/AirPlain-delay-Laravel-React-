import axios, { AxiosResponse } from "axios";
import { resolve } from "path";
import { ILoginData, IRegisterData, LoginResult, RegisterResult } from "../interfaces/auth";
import { IStopDelay } from "../interfaces/stopDelay/stopDelay";

class StopDelayApi {
    saveSteps(steps: IStopDelay) {
        return new Promise<JSON>((resolve, reject) => {
            console.log(steps);
            axios.post('/api/step6/register', steps).then((result: any) => {
                resolve(result.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
    
}

export const stopDelayApi = new StopDelayApi();
