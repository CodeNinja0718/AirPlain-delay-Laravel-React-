import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { TextInput } from "../../components/atoms/TextInput"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep8 } from "../../store/stopDelay"
import { IStep8 } from '../../interfaces/stopDelay/step8';

export const Step8= () => {
    const { initStep, step4, step8: initStep8  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step8, setStep8] = useState<IStep8>({
        bookingReference : '',
    });
    useEffect(()=>{
        setStep8(initStep8)
    },[]);
    const saveStep8 = () => {
        dispatch(updateStep8(step8));
    }
    return(
        <div className="px-8 pt-14 pb-11 flex flex-col">
            <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9  rounded-t-10">
            <div className="flex flex-row space-x-4">
                    <p className="text-grey-1 text-xl">PROGRESS</p>
                    <ProgressBar percent="5" className="w-4/5 h-3 mt-2"/>
                </div>
                <p className="text-sm mt-10">Flight from <b>{`${initStep.fromAirport.name} (${initStep.fromAirport.iata})`}</b> to <b>{`${initStep.toAirport.name} (${initStep.toAirport.iata})`}</b>on <b>{`${step4.airlinesDate[0]}`}</b> with Easyjet</p>
                <p className="w-65 text-3xl text-grey-1 mt-8">What’s your booking reference?</p>
                <TextInput onChange = {(e:React.ChangeEvent<HTMLInputElement>)=>{
                    setStep8({bookingReference:e.target.value})
                }} type="text" name="BookingReference"/>
                <p className="text-grey-2 text-2xl">Examples</p>
                <img src="/assets/img/step_14.svg" className="mt-6"/>
                <p className="mt-12 text-sm">
                A booking reference is a code used by airlines to keep track of individual reservations. You can find your booking reference on your e-tiket or on any emails or documents you received from the airline after booking you trip.
                </p>
                <p className="mt-4 text-sm">
                    This code will most often be six digits, including both letters and numbers (for example: DF87G3, REDYYD, L5W4N5). Please make sure you don’t include spaces.</p>
            </div>
            <div className="pl-9 py-11 bg-blue-3 bg-opacity-25 space-x-8 rounded-b-10 flex">
                <Link to={'/booking/steps/9'}><Button onClick={saveStep8} className="bg-red px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/7'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}
