import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { FileInput } from "../../components/atoms/fileinput"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"

export const Step15 = () => {
    return(
        <div className="px-8 pt-14 pb-11 flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10">
                <h3 className="text-left text-gray-500 font-bold text-4xl">
                    It is important that you read the entire page.
                </h3>
                <p className="text-gray-400 py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                 esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <FileInput name="open" type="file" url="E:\"/>
                <div className="flex justify-evenly items-center py-4">
                    <img src="../../assets/img/success.svg" alt="" />
                    <p className="text-gray-300 text-lg font-bold px-2">Your claim has been submitted. What’s going to happen next?</p>
                    <Button name="Speed up the process" className="bg-red text-white text-xl font-bold px-6 py-4"/>
                </div>
                <div className="bg-gray-100  px-4 py-5 rounded-10">
                    <div className="flex justify-start py-2">
                        <div className="pr-4">
                            <span className="bg-gray-300 font-bold text-white rounded-full px-4 py-2">1</span>
                        </div>
                        <p className="text-lg text-gray-500">
                            <span className="font-bold">Verification.</span>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex justify-start py-2">
                        <div className="pr-4">
                            <span className="bg-gray-300 font-bold text-white rounded-full px-4 py-2">2</span>
                        </div>
                        <p className="text-lg text-gray-500">
                            <span className="font-bold">Your claim will be sent to the airline. </span>  Lorem ipsum
                             dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    <div className="flex justify-start py-2">
                        <div className="pr-4">
                            <span className="bg-gray-300 font-bold text-white rounded-full px-4 py-2">3</span>
                        </div>
                        <p className="text-lg text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    <div className="flex justify-start py-2">
                        <div className="pr-4">
                            <span className="bg-gray-300 font-bold text-white rounded-full px-4 py-2">4</span>
                        </div>
                        <p className="text-lg text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        </p>
                    </div>
                    <div className="flex justify-start py-2">
                        <div className="pr-4">
                            <span className="bg-gray-300 font-bold text-white rounded-full px-4 py-2">5</span>
                        </div>
                        <p className="text-lg text-gray-500">
                            <span className="font-bold">Final step:</span>  Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut 
                        </p>
                    </div>
                </div>
                <p className="text-xl text-gray-400 pl-5 font-bold py-2">
                    If you have any further questions, please visit the <span className="text-blue-2 underline">Help section</span> 
                </p>
                <p className="text-xl text-gray-400 pl-5 font-bold py-2">
                    To read more about your rights, have a look at our <span className="text-blue-2 underline">Know your rights pages</span> 
                </p>
                <p className="pl-5 text-xl text-gray-400 py-4">
                    Remember to copy and save your claim number because if we need to contact you 
                    about your claim, your claim number allows us quickly locate your information.
                </p>
                <div className="w-1/2">
                    <FileInput name="file" type="file" url="232323"/>
                </div>
                <p className="text-xl text-gray-500 py-8">
                    Now, just sit back and we’ll handle thq rest. We will reach out to you 
                    if we have any additional requests regarding your claim. Thank you!
                </p>
                <hr />
                <div className=" flex  space-x-8    ">
                    <Link to={'/booking/steps/21'}><Button className="bg-red bg-opacity-25 px-16 py-3 space-x-8  text-white" name="Continue"/></Link>
                    <Link to={'/booking/steps/14'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
                </div>
            </div>
        </div>
    )
}