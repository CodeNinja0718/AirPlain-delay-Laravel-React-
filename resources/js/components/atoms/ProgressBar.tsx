import { ReactElement } from "react";

interface IProgressBar extends Partial<HTMLDivElement> {
    percent: string;
}

export const ProgressBar : (props: IProgressBar)  => ReactElement = ({percent, ...rest}) => {
    const per = 'p'+ percent;
    return(
        <div className={`${rest.className} relative`}>
            <div className="flex items-center">
                <p className="pr-4 text-2xl text-gray-400">Progress</p>
                <div className="flex w-full h-full rounded-10 bg-grey-3  border-2 border-grey-2 border-opacity-50">
                    <div className={`bg-blue-2 w-[${percent}%] h-full rounded-10 relative  border-2 border-grey-2 border-opacity-50`}></div>
                </div>
            </div>
            <div className={`absolute text-end w-${per} top-7 ml-16 `}>
                <span className=" bg-gray-700 text-white px-2 py-1 rounded-10">{percent}%</span>
            </div>
        </div>
    )
}
