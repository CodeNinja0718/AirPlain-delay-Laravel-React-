import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { TextInput } from "../../components/atoms/TextInput"
import { IStep4 } from "../../interfaces/stopDelay/step4"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep4 } from "../../store/stopDelay"

export const Step4 = () => {
    const { step4:initStep4  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step4, setStep4] = useState<IStep4>({
        airlinesName : [],
        airlinesDate : [],
        airlinesFlightNumber :[]
    });
    useEffect(()=>{
        setStep4(initStep4)
    },[]);
    const saveStep4 = () => {
        dispatch(updateStep4(step4));
    }
    const changeHandle1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.name);
        setStep4({
            ...step4,
            [e.target.name] : [e.target.value, step4[e.target.name as keyof IStep4][1] ]
        })
    }
    const changeHandle2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep4({
            ...step4,
            [e.target.name] : [step4[e.target.name as keyof IStep4][0], e.target.value ]
        })
    }
    const changeHandle3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep4({
            ...step4,
            [e.target.name] : [step4['airlinesFlightNumber'][0], e.target.value ]
        })
    }
    console.log(step4);
    return(
        <div className="px-8 pt-14 pb-11 flex flex-col">
            <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9  rounded-t-10">
                <div className="flex flex-row space-x-4">
                    <p className="text-grey-1 text-xl">PROGRESS</p>
                    <ProgressBar percent="5" className="w-4/5 h-3 mt-2"/>
                </div>
                <p className="w-65 text-3xl text-grey-1 mt-12">Flight details</p>
                <img src="/assets/img/step3_8.svg" className="w-1/4 mt-11" />
                <div className="flex flex-row mt-4 space-x-8">
                    <TextInput type="text" name="airlinesName" label="Airlines" onChange={changeHandle1} required={true} className="w-1/2"/>
                    <TextInput type="date" name="airlinesDate" label="Flight date" onChange={changeHandle2} required={true} className="w-1/2" />
                </div>
                <TextInput className="w-1/2 pr-4" name="airlinesFlightNumber" type="text" onChange={changeHandle3} label="Flight number" required={true} />
                <img src="/assets/img/step3-10.svg" className="w-2/3 mt-11" />
            </div><hr/>
            <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9">
                <img src="/assets/img/step3_11.svg" className="w-1/4 mt-11" />
                <div className="flex flex-row space-x-8">
                    <TextInput type="text" name="airlinesName" label="Airlines" onChange={changeHandle1} required={true} className="w-1/2"/>
                    <TextInput type="date" name="airlinesDate" label="Flight date" onChange={changeHandle2} required={true} className="w-1/2" />
                </div>
                <TextInput name="airlinesFlightNumber" className="w-1/2 pr-4" onChange={changeHandle3} type="text" label="Flight number" required={true} />
                <img src="/assets/img/step3-10.svg" className="w-2/3 mt-11" />
            </div>
            <div className="flex flex-row pl-9 py-11 bg-blue-3 bg-opacity-25 space-x-8 rounded-b-10">
                <Link to={'/booking/steps/5'}><Button className="bg-red bg-opacity-25 px-16 py-3 text-white" onClick={saveStep4} name="Continue"/></Link>
                <Link to={'/booking/steps/3'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}
