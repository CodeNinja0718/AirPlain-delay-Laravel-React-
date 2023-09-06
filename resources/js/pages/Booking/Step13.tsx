import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { CheckBox } from "../../components/atoms/CheckboxInput"
import { FileInput } from "../../components/atoms/fileinput"
import { FileUpload } from "../../components/atoms/fileupload"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"
import { TextInput } from "../../components/atoms/TextInput"

export const Step13 = () => {
    return(
        <div className="pt-14  flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10 ">
                <ProgressBar percent="8"/>
                <h3 className="text-left text-gray-500  text-4xl py-2">
                        Optional: <strong>Additional Information</strong>
                </h3>
                <p className="">
                    If we gather more information, we can handle your claim faster.
                </p>
                <p className="pt-4">
                    Have you been offered re-routing? 
                </p>
                <RadioGroupInput name="lds" radioList={[<>Yes</>,<>No</>]} state="row" buttonWidth="1/4"/>
                <div className="w-1/2">
                    <p className="pt-4">
                        Preferred language of communication?
                    </p>
                    <SelectInput options={[<>English</>,<></>]} />
                </div>
                <div>
                    <p className="pt-4">
                         Where did you buy your ticket? 
                    </p>
                    <RadioGroupInput radioList={[<>Directly from the airline </>,<>Offline travel agent</>,<>Online travel agent</>]} state={"row"} name="" buttonWidth="1/2"/>
                </div>
                <div>
                    <p className="pt-4">
                        Enter the web-site where you bougth your ticket.
                    </p>
                    <TextInput name="buywebsite"  type="text" className="w-1/2"/>
                </div>
                <p className="pt-4">
                    Have you already contacted the airlines? 
                </p>
                <RadioGroupInput name="lds" radioList={[<>Yes</>,<>No</>]} state="row" buttonWidth="1/4"/>
                <div className="border-blue-2 border-1 border-dashed rounded-10 px-4 py-40 mt-5 text-center">
                    <img src="../../assets/img/file (1) 1 (1).svg" alt="" className="m-auto"/>
                    <p className="text-xl text-gray-400 font-bold py-2 ">Drag & drop the Airline's answer</p>
                    <p className="text-xl text-gray-400">or <span className="text-blue-2 underline">select file</span> to upload</p>
                </div>
            </div>
            <div className="bg-gray-100 border-t-2 border-gray-200 py-12 space-x-8  px-4 rounded-b-10 flex">
                <Link to={'/booking/steps/14'}><Button className="bg-red bg-opacity-25 px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/12'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}