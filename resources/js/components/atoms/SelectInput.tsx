import { InputHTMLAttributes, ReactElement } from "react";

interface ISelectInput extends InputHTMLAttributes<HTMLInputElement> {
    options: Array<ReactElement>;
    input?:boolean;
    startImg?: string;
    endImg?: string;
    label?: string;
    required?: boolean;  
}
export const SelectInput : (props: ISelectInput) => ReactElement = ({options, ...rest}) => {
    return(
        <div className={`flex flex-col  ${rest.className}`}>
            {rest.startImg && <img src={rest.startImg}/>}
            <p>{rest.label} {rest.required && <span className="text-red">*</span>}</p>
            <select defaultValue="0" className="rounded-10 mt-4 border-blue-3 border-opacity-50">
                {options.map((item, key) => (
                    <option value={key} key={key}>{item}</option>
                ))}
            </select>
            {rest.endImg && <img src={rest.endImg}/>}
        </div>
    )
}