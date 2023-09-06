import { ReactElement, useState } from "react"
import { Link } from "react-router-dom"
import { IDropDownData } from "../../interfaces/layouts/navbar"

interface IDropButton extends Partial<HTMLDivElement> {
    text: string,
    list: Array<IDropDownData>
}
export const DropButton : (props: IDropButton) => ReactElement = ({text, list, ...rest}) => {
    const [visible, setVisible] = useState(false);
    const hoverHandle = ()=> {
        setVisible(true);
    }
    const leaveHandle = ()=> {
        setVisible(false);
    }
    const selected = (item: IDropDownData)=> {
        setVisible(false);
        item.onClick();
    }
    return(
        <div className={`relative text-center ${rest.className}`}  onMouseEnter={hoverHandle} onMouseLeave={leaveHandle}>
            <div className="text-center pl-3">{text}</div>
            {visible && <div className="flex flex-col fixed bg-white rounded-10 px-2 py-3 gap-4 shadow-lg">
                {list.map( (item, index)=> (
                    <li className="text-black decoration-0 block  hover:bg-blue-1 hover:bg-opacity-80 hover:text-white hover:rounded-lg border-b-1 px-2" onClick={()=>{selected(item)}}>{item.title}</li>
                ) )}
                        </div>}
        </div>
    )
}


// /* Change color of dropdown links on hover */
// .dropdown-content a:hover {background-color: #f1f1f1}

// /* Show the dropdown menu on hover */
// .dropdown:hover .dropdown-content {
//   display: block;
// }
