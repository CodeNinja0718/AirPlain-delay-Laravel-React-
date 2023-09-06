import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { TextInput } from "../../components/atoms/TextInput"
import { IStep5 } from "../../interfaces/stopDelay/step5"
import { IStep6 } from '../../interfaces/stopDelay/step6';
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep6 } from "../../store/stopDelay"

export const Step6 = () => {
    const { step6:initStep6  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step6, setStep6] = useState<IStep6>({
        addressOfPassenger : "",
        birthdayOfPassenger : new Date(),
        cityOfPassenger : "",
        countryOfPassenger : "",
        firstNameOfPassenger : "",
        lastNameOfPassenger : "",
        passportNumberOfPassenger: ""
    });
    useEffect(()=>{
        setStep6(initStep6)
    },[]);
    const saveStep6= () => {
        dispatch(updateStep6(step6));
    }
    const changHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep6({
            ...step6,
            [e.target.name] : e.target.value
        })
    } 
    return(
        <div className="px-8 pt-14 pb-11 flex flex-col">
            <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9  rounded-t-10">
                <div className="flex flex-row space-x-4">
                    <p className="text-grey-1 text-xl">PROGRESS</p>
                    <ProgressBar percent="5" className="w-4/5 h-3 mt-2"/>
                </div>
                <p className="text-sm mt-10">Flight from <b>Tel Aviv (TLV)</b> to <b>Budapest (BUD)</b> flight diley - more than 8 hours</p>
                <p className="w-65 text-3xl text-grey-1 mt-8">Passenger details</p>
                <div className="flex flex-row space-x-8">
                    <TextInput type="text" name="firstNameOfPassenger" onChange={changHandle} label="First Name" required={true} className="w-1/2"/>
                    <TextInput type="text" name="lastNameOfPassenger" onChange={changHandle} label="Last Name" required={true} className="w-1/2" />
                </div>
                <div className="flex flex-row space-x-8">
                    <TextInput type="text" name="addressOfPassenger" onChange={changHandle} label="Address" required={true} className="w-1/2"/>
                    <TextInput type="text" name="cityOfPassenger" onChange={changHandle} label="City" required={true} className="w-1/2" />
                </div>
                <TextInput name="countryOfPassenger" onChange={changHandle} type="text" className="w-1/2 pr-4" label="Country" required={true} />
                <div className="flex flex-row space-x-8">
                    <TextInput type="date" onChange={changHandle} name="birthdayOfPassenger" label="Birthdate" required={true} className="w-1/2"/>
                    <img src="/assets/img/step3_13.svg" className="mt-14"/>
                </div>
                <TextInput name="passportNumberOfPassenger" onChange={changHandle} type="text" className="w-1/2 pr-4" label="Passport number" required={true} />
            </div>
            <div className="flex flex-row pl-9 py-11 bg-blue-3 bg-opacity-25 space-x-8 rounded-b-10 ">
                <Link to={'/booking/steps/7'}><Button onClick={saveStep6} className="bg-red bg-opacity-25 px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/5'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}