import { Link } from "react-router-dom";
import { TextInput } from "../../components/atoms/TextInput";
import { Button } from "../../components/atoms/Button";
import { CheckBox } from "../../components/atoms/CheckboxInput";
import { registerNewUser } from "../../store/auth";
import React, { useState } from "react";
import { IRegisterData} from "../../interfaces/auth";
import { authApi } from "../../services/authApi";
import { useAppDispatch } from "../../store/hooks";
import { AxiosPromise } from "axios";


export const Register = () => {
    const [data, setData] = useState<IRegisterData>({
        email: "",
        password: ""
    });
    const dispatch = useAppDispatch();
    const registerOnClick = () => {
        authApi.register(data).then((result) => {
            dispatch(registerNewUser(result))
            window.location.href = "../";
        }).catch()
        
    }
    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    const onCloseHandle = () => { 
        window.location.href = "../";
    }
    
    return(
        <div className="justify-self-center grid  mt-24 w-170 h-225  bg-white rounded-10 shadow-md">
            <div className="justify-self-end"><span className="text-3xl cursor-pointer" onClick={onCloseHandle}>&times;</span></div>
            <div className="justify-self-center mb-11">
                <div className="flex flex-col max-w-md">
                    <div className="text-center ">
                        <p className="text-3xl block">Sign Up</p>
                        <p className="block pt-6">Already have an account? <Link to={'../login'} className="text-blue-2">Sign In</Link></p>
                    </div>
                    <div className="grid place-items-center">
                        <img className="w-full" src="/assets/img/sign-1.png"/>
                        <img className="w-full" src="/assets/img/sign-2.png"/>
                    </div>
                    <div className="flex">
                        <div className="grow border-grey-2 border-b-2"></div>
                        <div className="flex-none">or</div>
                        <div className="grow border-grey-2 border-b-2"></div>
                    </div>
                    <TextInput name="email" type="email" className="w-full mt-3 border-grey-5" label="Email" required={true} onChange={onChangeHandle} />
                    <TextInput name="password" type="password" className="w-full mt-3  border-grey-5" label="Passsword" required={true} onChange={onChangeHandle} />
                    <TextInput name="repassword" type="password" className="w-full mt-3  border-grey-5" label="Repeat password"/>
                    <CheckBox className="mt-6" label={<>I have read and agree to the <span className="text-blue-1">Terms and Conditions</span> and the <span className="text-blue-1">Privacy Policy.</span></>}/>
                    <div className="flex justify-between mt-6">
                        <Button onClick={registerOnClick} name = "Register" className="bg-red h-11 bg-opacity-50 w-40"/>
                        <Button name = "Cancel" className="bg-grey-4 bg-opacity-50 h-11 w-40"/>
                    </div>
                    
                </div>    
            </div> 
            
        </div>
    );
}
