import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { FileInput } from "../../components/atoms/fileinput"
import { FileUpload } from "../../components/atoms/fileupload"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"
import { useAppSelector } from "../../store/hooks"
import { StopDelayState } from "../../store/stopDelay"

export const Step9 = () => {
    const { initStep, step4, step9: initStep9  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    return(
        <div className="pt-14  flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10 ">

                <h3 className="text-left text-gray-500  text-4xl py-6">
                        <strong>Almost there!</strong>
                </h3>
                <p className="text-sm mt-10">Flight from <b>{`${initStep.fromAirport.name} (${initStep.fromAirport.iata})`}</b> to <b>{`${initStep.toAirport.name} (${initStep.toAirport.iata})`}</b>on <b>{`${step4.airlinesDate[0]}`}</b> with Easyjet</p>
                <div className="flex justify-between items-center py-4">
                    <p className="text-gray-400 pr-3">Please sign the assignment agreement so that we can start processing your claim.</p>
                    <Button name="Read the agrement" className="text-blue-2 border-blue-2 border-1 px-6 py-2"/>
                </div>

                <div className="bg-grey-3 px-4 py-12 rounded-10">
                    <p className="text-center font-semibold text-gray-500">YOSI DAVID (YOU)</p>
                    <div className="bg-white px-4 mx-4 py-6 rounded-10 shadow-md mt-4">
                        <img src="../../assets/img/laptop 1 (1).svg" className="m-auto" alt="" />
                        <p className="text-gray-400 font-bold text-center pt-4">Click and draw you signature </p>
                        <p className="text-gray-400 text-xl text-center py-1">It must match the one on your ID. </p>
                        <div className="pt-5 flex justify-end">
                            <Button name="Clear" className="border-1 border-blue-2 text-blue-2 px-6 py-2 "/>
                        </div>
                    </div>
                </div>
                <div className="py-8 flex justify-center items-center">
                    <div className="px-4">
                        <img src="../../assets/img/star_text.svg" alt="" />
                    </div>
                    <div className="pr-4">
                        <img src="../../assets/img/tp-stars-45 1.svg" alt="" />
                    </div>
                    <p>Rated as “Excellent” by 700+ customers.</p>
                </div>
            </div>
            <div className="bg-white border-t-2 space-x-8  border-gray-200 py-12 px-4 rounded-b-10 flex items-center flex">
                <Link to={'/booking/steps/10'}><Button className="bg-red px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/8'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}
