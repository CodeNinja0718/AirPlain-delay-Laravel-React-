import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"

export const Step21 = () => {
    return(
        <div className="pt-14  flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10 ">
                <ProgressBar percent="8"/>
                <h3 className="text-left text-gray-500  text-4xl py-6">
                        <strong>Verify your Identity</strong>
                </h3>
                <p className="text-gray-500 text-xl">
                    Verrifying your identity is required to allow<strong> Stop Delay</strong> to process your claim for compensation. Please use the box below to 
                    upload a photo or scan of your current <strong>  National Identity Card </strong> or <strong> Passport</strong> (within its expiry date).
                </p>
                <div className="bg-slate-100 px-2 py-6 mt-5 rounded-10">
                    <Alert imgurl="../../assets/img/alert.svg" message="We fully comply with all EU data protection laws, and your data is safe"/>
                </div>
                <div className="border-blue-2 border-1 border-dashed px-2 py-24 rounded-10 mt-6 text-center">
                    <img src="../../assets/img/Flat.svg" alt="" className="m-auto"/>
                    <p className="font-bold text-xl text-gray-500 pt-4 ">Drag & drop Boarding pass or Booking confirmation</p>
                    <p className="text-xl text-gray-500"> or</p>
                    <p className="text-xl text-blue-2 underline flex justify-center"> select<p className="text-xl pl-2 text-gray-500"> upload</p></p>
                    <p className="text-xl text-gray-400">Without these documents, we can’t get your flight compensation!</p>
                </div>
                <div className="pt-6">
                    <Alert imgurl="../../assets/img/alert.svg" message="Speed up your claim by providing necessary documents. Up to 60% faster claim processing!"/>
                </div>
            </div>
            <div className="bg-gray-100 border-t-2 border-gray-200 py-12 px-4 rounded-b-10 flex items-center">
                <Button name="Continue" className="px-16 py-4 text-white bg-red my-5 opacity-40 mr-5"/>
                <Button name="Skip & Upload later" className="bg-blue-2 px-6 text-white py-4"/>
            </div>
        </div>
    )
}