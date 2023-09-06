import { InputHTMLAttributes, ReactElement } from "react";
import { Button } from "./Button";
interface IFileUpload extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

export const FileUpload: (props: IFileUpload) => ReactElement  = ({name , ...rest }) => {
    return (
        <div className="rounded-10 ">
            <label className="custom-file-upload ">
                <input type="file" className="hidden"/>
                <span className="bg-blue-2 text-white px-6 py-4 rounded-10 cursor-pointer">{name}</span>
            </label>
        </div>
    )
}
