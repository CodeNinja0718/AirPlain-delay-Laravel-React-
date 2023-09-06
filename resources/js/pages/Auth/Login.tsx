import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/Button";
import { TextInput } from "../../components/atoms/TextInput";
import { ILoginData } from "../../interfaces/auth";
import { authApi } from "../../services/authApi";
import { loginUser } from "../../store/auth";
import { useAppDispatch } from "../../store/hooks";

export const Login = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<ILoginData>({
        email: "",
        password: ""
    })
    const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }
    const loginOnClick = () => {
        authApi.login(loginData).then((result)=>{
            dispatch(loginUser(result))
            // window.location.href = "../";
            navigate('/my-claims');
        })
    }
    const onCloseHandle = () => { 
        window.location.href = "../";
    }
    return(
        <div className="justify-self-center grid mt-24 w-134 h-175 bg-white rounded-10 shadow-md">
            <div className="justify-self-end"><span className="text-3xl cursor-pointer" onClick={onCloseHandle}>&times;</span></div>
            <div className="justify-self-center mb-11">
                <div className="flex flex-col max-w-sm">
                    <div className="text-center ">
                        <p className="text-3xl block">Sign In</p>
                        <p className="block pt-6">New user? <Link to={'/auth/register'} className="text-blue-2">Register</Link></p>
                    </div>
                    <div className="grid place-items-center">
                        <img className=" w-full" src="/assets/img/sign-1.png" />
                        <img className="block w-full" src="/assets/img/sign-2.png"/>
                    </div>
                    <div className="flex">
                        <div className="grow border-grey-2 border-b-2"></div>  
                        <div className="flex-none">or</div>
                        <div className="grow border-grey-2 border-b-2"></div>
                    </div>
                    <TextInput name="email" type="email" className=" mt-3 border-grey-5" label="Email" required={true} onChange={onChangeHandle} />
                    <TextInput name="password" type="password" className="mt-3 border-grey-5" label="Passsword" required={true} onChange={onChangeHandle} />
                    <Link to={'auth/register'} className="flex justify-end text-lg pl-48 text-blue-2" onClick={loginOnClick}>Forgot password?</Link>
                    <div className="flex justify-between mt-6">
                        <Button name = "Login" className="bg-red h-11 bg-opacity-50 w-52" onClick={loginOnClick}/>
                        <Button name = "Cancel" className="bg-grey-4 bg-opacity-50 h-11 w-52"/>
                    </div>
                    
                </div>    
            </div>
            
        </div>
       
                    
    );
}