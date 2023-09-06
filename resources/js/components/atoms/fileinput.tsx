import { InputHTMLAttributes, ReactElement } from "react";
import { Button } from "./Button";
interface IFileinput extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type :'file';
    url : string;
}

export const FileInput: (props: IFileinput) => ReactElement  = ({name , type,url, ...rest }) => {
    return (
        <div className="border-1 border-gray-300 border-dashed rounded-10 m-2">
            <label className="custom-file-upload ">
                <input type="file" className="hidden"/>
                <div className="flex w-full justify-between items-center pl-2 text-gray-400">
                    <p>{url}</p>
                    <span className="flex">
                        <p className="bg-blue-2 py-2 px-4 mx-1 text-white rounded-10">Open</p>
                        <p className="bg-white border-1 border-blue-500 py-2 px-4  text-blue-2 rounded-10">Copy</p>
                    </span>
                </div>
            </label>
        </div>
    )
}
