import { ButtonHTMLAttributes, ReactElement } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    name: string,
}
export const Button: (props: IButton) => ReactElement  = ({name, ...rest}) => {
 return(
    <div>

        <button {...rest} className={`rounded-10 text-lg font-semibold ${rest.className}` }>{name}</button>
    </div>
 );

}