import { InputHTMLAttributes, ReactElement } from "react";
import { IAirportdata } from "../../interfaces/cms/airportdata";
interface IOption{
    text : string;
    value : string | number;
}
interface ISelectButton extends InputHTMLAttributes<HTMLSelectElement> {
    options: Array<IOption>;
    input?:boolean;
    startImg?: string;
    endImg?: string;
    label?:string;
    required?: boolean;
    onChange  ?: React.ChangeEventHandler<HTMLSelectElement>; 
}
export const SelectButton : (props: ISelectButton) => ReactElement = ({options, ...rest}) => {
    return(
        <div className={`flex flex-row items-center   ${rest.className}`}>
            <p>{rest.label} {rest.required && <span className="text-red">*</span>}</p>
            <div className="flex flex-row">
                {rest.startImg && <img src={rest.startImg}/>}
                <select defaultValue="0" onChange={rest.onChange} className="rounded-10 w-full border-blue-3 border-opacity-0 outline-none">
                    {options.map((item, key) => (
                        <option value={item.value} key={key}>{item.text}</option>
                    ))}
                </select>
            </div>
            {rest.endImg && <img src={rest.endImg}/>}
        </div>
    )
}