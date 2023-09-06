import { InputHTMLAttributes, ReactElement } from "react";

export interface IRadioButton {
    text: ReactElement;
    value: number|string|boolean;
}
interface IRadioGroupButton extends InputHTMLAttributes<HTMLInputElement> {
    radioList: Array<IRadioButton>;
    name: string;
    state: "row" | "col" ;
    label?: string;
    required?: boolean;
    className?:string;
    buttonWidth?:string;
    key?: number
}
export const RadioGroupButton: (props: IRadioGroupButton) => ReactElement = ({name,buttonWidth,state, label, required,radioList, className,...rest}) => {
    return(
        <div className={className}>
            <div className="pb-4">{label} {required &&<span className="text-red">*</span>}</div>
            <div className={`flex flex-${state}`}>
            {radioList.map((item, key)=>(
                <div className={`flex flex-row w-1/${radioList.length} pl-5 mt-4 py-3 desktop:w-1/2 tablet:w-2/3 phone:w-full  border-grey-3 border-1 rounded-10`} key={key}>
                    <input className="mt-1" type="radio" name={name} value={`${item.value}`} key={key}
                    onChange = {rest.onChange} checked={rest.defaultValue == item.value} />
                    <div className="ml-5">{item.text}</div>
                </div>
            ))}
            </div>

        </div>
    )
}
