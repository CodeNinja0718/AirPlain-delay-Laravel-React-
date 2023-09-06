import { InputHTMLAttributes, ReactElement } from "react";

interface IRadioGroupInput extends InputHTMLAttributes<HTMLInputElement> {
    radioList: Array<ReactElement>;
    name: string;
    state: "row" | "col" ;
    label?: string;
    required?: boolean;
    className?:string;
    buttonWidth?:string;
}
export const RadioGroupInput: (props: IRadioGroupInput) => ReactElement = ({name,buttonWidth,state, label, required,radioList, className,...rest}) => {
    return(
        <div className={className}>
            <div className="pb-4">{label} {required &&<span className="text-red">*</span>}</div>
            <div className={`flex flex-${state}`}>
            {radioList.map((item, key)=>(
                <div className={`flex flex-row px-5 py-3 w-${buttonWidth} border-blue-2 border-1 rounded-10`} key={key}>
                    <input className="mt-1" type="radio" name={name} value={key}
                    onChange = {rest.onChange} />
                    <div className="ml-5">{item}</div>
                </div>
            ))}
            </div>
        </div>
    )
}
