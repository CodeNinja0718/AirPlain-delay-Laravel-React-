import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { FileInput } from "../../components/atoms/fileinput"
import { FileUpload } from "../../components/atoms/fileupload"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"

export const Step10 = () => {
    return(
        <div className="pt-14  flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10 ">
                <ProgressBar percent="5"/>
                <h3 className="text-left text-gray-500  text-4xl py-6">
                        <strong>Upload boarding pass or e-ticket</strong>
                </h3>
                <p className="text-gray-500 text-xl">
                        Provide boarding pass or e-ticket. It’s legally required to build the case against <strong>Easyjet.</strong>
                </p>
                <div className="bg-slate-100 px-2 py-6 mt-5 rounded-10">
                    <Alert imgurl="../../assets/img/alert.svg" message="To place a claim with this airline, you have to provide:"/>
                    <p className="font-bold text-gray-500 pl-12">Booking confirmation email or boarding pass or any other document confirming your ticket reservation</p>
                    <p className="font-bold text-gray-500 pl-12">Copy of your passport/national identity card</p>
                    <p className="text-gray-400 pl-12">Please upload them now to start validation process immediately. If you don’t have the documents at hand, upload them later via email.</p>
                </div>
                <div className="border-blue-2 border-1 border-dashed px-2 py-24 rounded-10 mt-6 text-center">
                    <img src="../../assets/img/Frame 1.svg" alt="" className="m-auto"/>
                    <p className="font-bold text-xl text-gray-500">Drag & drop Boarding pass or Booking confirmation</p>
                    <p className="text-xl text-gray-500"> or</p>
                    <p className="text-xl text-blue-2 underline flex justify-center"> select<p className="text-xl pl-2 text-gray-500"> upload</p></p>
                    <p className="text-xl text-gray-400">Without these documents, we can’t get your flight compensation!</p>
                </div>
                <div className="pt-6">
                    <Alert imgurl="../../assets/img/alert.svg" message="Speed up your claim by providing necessary documents. Up to 60% faster claim processing!"/>
                </div>
            </div>
            <div className="bg-gray-100 border-t-2 space-x-8  border-gray-200 py-12 px-4 rounded-b-10 flex items-center flex">
                <Link to={'/booking/steps/11'}><Button className="bg-red bg-opacity-25 px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/9'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}