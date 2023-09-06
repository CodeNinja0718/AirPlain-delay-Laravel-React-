import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { FileInput } from "../../components/atoms/fileinput"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectInput } from "../../components/atoms/SelectInput"

export const Step14 = () => {
    return(
        <div className="pt-14  flex flex-col bg-white rounded-10 shadow-md">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10">
                <ProgressBar percent='8'/>
                <h3 className="text-left text-gray-500 font-bold text-4xl pt-8">
                    Do you want to recommend us to your friends?
                </h3>
                <p className="py-4">
                Roughtly 8 <strong>million</strong> people wourldwide are eligible for money, miles or vouches
                 from airlines, but less than 2% know it! Help your friends!
                </p>
                <RadioGroupInput name="lds" radioList={[<>Yes</>,<>No</>]} state="row" buttonWidth="1/4"/>
                <div className="flex justify-between items-center my-1">
                    <button>
                        <img src="../../assets/img/Group 11.svg" alt="" />
                    </button>
                    <button>
                        <img src="../../assets/img/Face-link.svg" alt="" />
                    </button>
                    <button>
                        <img src="../../assets/img/Group 764.svg" alt="" />
                    </button>
                </div>
                <p className="text-gray-400 text-xl">or copy the link below and share</p>
                <div>
                    <FileInput name="file" type="file" url="aaa"/>
                </div>
            </div>
            
            <div className="bg-gray-100 border-t-2 border-gray-200 py-12 px-4  space-x-8 rounded-b-10 flex">
                 <Link to={'/booking/steps/15'}><Button className="bg-red bg-opacity-25 px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/13'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}