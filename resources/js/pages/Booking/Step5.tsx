import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { CheckBox } from "../../components/atoms/CheckboxInput"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { TextInput } from "../../components/atoms/TextInput"
import { IStep5 } from '../../interfaces/stopDelay/step5';
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep5 } from "../../store/stopDelay"
export const Step5 = () => {
    const { step5:initStep5  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step5, setStep5] = useState<IStep5>({
        compansationEmail : "",
        compansationPhone : "",
        indexOfUseOfWhatapp : false
    });
    useEffect(()=>{
        setStep5(initStep5)
    },[]);
    const saveStep5 = () => {
        console.log(step5)
        dispatch(updateStep5(step5));
    }
    const changHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep5({
            ...step5,
            [e.target.name] : e.target.type == 'text' ? e.target.value : e.target.checked
        })
    } 

    return(
        <div className="px-8 pt-14 pb-11 flex flex-col">
            <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9  rounded-t-10">
                <div className="flex flex-row space-x-4">
                    <p className="text-grey-1 text-xl">PROGRESS</p>
                    <ProgressBar percent="50" className="w-4/5 h-3 mt-2"/>
                </div>
                <p className="text-sm mt-10">Flight from <b>Tel Aviv (TLV)</b> to <b>Budapest (BUD)</b> flight diley - more than 8 hours</p>
                <p className="w-65 text-3xl text-grey-1 mt-8">Flight details</p>
                <img src="/assets/img/step3_8.svg" className="w-1/4 mt-11" />
                <TextInput type="text" onChange={changHandle} name="compansationEmail" label="Type your best e-mail to compensation check result." required={true} className="w-1/2"/>
                <TextInput name="compansationPhone" onChange={changHandle} type="text" label="Phone" required={true} className="w-1/2" />
                <img src="/assets/img/step3_12.svg" className="w-2/3 mt-11" />
                <CheckBox onChange={changHandle} name="indexOfAgree" className="mt-6" label={<>I agree to <span className="text-blue-2">Terms and Conditions, Price List</span> and the <span className="text-blue-2">Privacy Policy.</span></>}/>
                <img src="/assets/img/step3-10.svg" className="w-2/3 mt-11" />

            </div>
            <div className="flex flex-row pl-9 py-11 bg-blue-3 bg-opacity-25 space-x-8 rounded-b-10 ">
                <Link to={'/booking/steps/6'}><Button onClick={saveStep5} className="bg-red px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/4'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}