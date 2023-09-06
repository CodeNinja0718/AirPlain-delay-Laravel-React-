import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { FileInput } from "../../components/atoms/fileinput"
import { FileUpload } from "../../components/atoms/fileupload"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"

export const Step12 = () => {
    return(
        <div className="pt-14  flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10 ">
                <ProgressBar percent="8"/>
                <h3 className="text-left text-gray-500  text-4xl py-6">
                        Optional: <strong>Extra expenses</strong>
                </h3>
                <p className="py-4">
                    Did you spend money due to your flight distruption?
                </p>
                <RadioGroupInput name="lds" radioList={[<>Yes</>,<>No</>]} state="row" buttonWidth="1/4"/>
                <div>
                    <h3 className="text-left text-gray-500  text-xl py-6">
                            For example :
                    </h3>
                    <div>
                        <div className="flex py-3">
                            <div className="flex pr-4">
                                <img src="../../assets/img/restaurant (1) 1.svg" alt="" />
                                <p className="px-3">food </p>
                            </div>
                            <div className="flex">
                                <img src="../../assets/img/interface 1.svg" alt="" />
                                <p className="px-3">missed event </p>
                            </div>
                        </div>
                        <div className="flex py-3">
                            <div className="flex pr-4">
                                <img src="../../assets/img/bus 1.svg" alt="" />
                                <p className="px-3">food </p>
                            </div>
                            <div className="flex">
                                <img src="../../assets/img/bed 1.svg" alt="" />
                                <p className="px-3">missed event </p>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="text-left text-gray-500  text-xl py-6">
                    <strong>APPROXIMATE TOTAL</strong>
                </h3>
                <p className="border-1 border-gray-400 px-16 py-6 w-1/2 rounded-10">
                    € 400.00
                </p>
                <div className="flex justify-start items-center my-10">
                    <FileUpload name="+ Uplod Expensive Involve"/>
                    <p className="px-5 text-xl text-gray-500">You can upload more than one file .jpg .jpeg .png .gif .pdf .doc .docx</p>
                </div>
                <div className="bg-grey-3 px-5 py-5 rounded-10">
                    <div className="w-15 text-center">
                        <img src="../../assets/img/Group (8).svg" className="m-auto" alt="" />
                        <p className="text-gray-400"> Boarding pass BN2345</p>
                    </div>
                </div>
                <h3 className="text-left text-gray-500  text-4xl py-6">
                    Optional: <strong>Tell us what happened</strong>
                </h3>
                <p className="my-2">
                    Please provide any information that may help us proccess your
                    claim quickly. Were you rebooked on a different flight?
                </p>
                <textarea name="" id="" cols="30" rows="10" className="border-1 border-gray-300 rounded-10"></textarea>
                <div className="pt-6">
                    <Alert imgurl="../../assets/img/alert.svg" message="Speed up your claim by providing necessary documents. Up to 60% faster claim processing!"/>
                </div>
            </div>
            <div className="bg-gray-100 border-t-2 border-gray-200 space-x-8  py-12 px-4 rounded-b-10 flex">
                <Link to={'/booking/steps/13'}><Button className="bg-red bg-opacity-25 px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/11'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}