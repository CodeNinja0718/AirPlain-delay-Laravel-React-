import { ReactElement } from "react";

interface ICheckBox extends Partial<HTMLInputElement> {
    label: ReactElement;
    onChange ?: React.ChangeEventHandler<HTMLInputElement>
}

export const CheckBox: (props: ICheckBox) => ReactElement  = ({label, ...rest}) => {
    return (
        <div className={`flex space-x-5 ${rest.className ?? ''}`}>
            <input type='checkbox' onChange={rest.onChange} className="flex-none mt-1" name={rest.name} />
            <label className="flex-1">{label}</label>
        </div>
    )
}