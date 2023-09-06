import { HTMLAttributes, ReactElement } from "react";

interface IAlert extends HTMLAttributes<HTMLParagraphElement> {
    message: string;
    imgurl : string;
}

export const Alert: (props: IAlert) => ReactElement = ({ message,imgurl, ...rest }) => {
    return (
        <div className={`flex bg-slate-100 p-3 rounded-10  justify-start items-center ${rest.className}`}>
            <img src={imgurl} alt=""/>
            <p  {...rest} className={`alert pl-4 text-gray-400`}>
                {message}
            </p>
        </div>
    );
}