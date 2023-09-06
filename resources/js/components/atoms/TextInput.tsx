import { InputHTMLAttributes, ReactElement } from "react";

interface ITextInput extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type: "text" | "email" | "password" | "date";
    label?: string;
    required?: boolean;
    startImg ?: string;
}

export const TextInput: (props: ITextInput) => ReactElement  = ({name, type,  ...rest }) => {
    return (
        <div className={`${rest.className ?? ''}`}>
            <label htmlFor={name}>{rest.label??''} {rest.required&&<span className="text-red">*</span>}</label>
            <div className={`rounded-10 h-10 my-3 `}>
                <img src={rest.startImg?'assets/img/icon/p-2.svg':''} alt=""  className="absolute h-10 align-middle "/>
                <input type={type} name={name} {...rest} placeholder={`Enter your ${rest.label}`} className="rounded-10 w-full"/>
            </div>
        </div>
    )
}
