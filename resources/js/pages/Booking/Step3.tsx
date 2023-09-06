import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupButton } from '../../components/atoms/RadioGroupButton';
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { IStep3 } from "../../interfaces/stopDelay/step3"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep3 } from "../../store/stopDelay"

export const Step3 = () => {
    const { step3 : initStep3  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step3, setStep3] = useState<IStep3>({
        indexOfFlightCancellation : -1,
        indexOfDistruptOfAirline : -1,
        indexOfReasonOfAirline : -1,
        indexOfServiceFromAirline : [],
    });
    useEffect(()=>{
        setStep3(initStep3)
    },[]);
    const saveStep3 = () => {
        dispatch(updateStep3(step3));
    }
    const setServiceFromAirline = (val: number) => {
        const {indexOfServiceFromAirline} = step3;
        const index = indexOfServiceFromAirline.indexOf(val);
        if(indexOfServiceFromAirline.length>0){
            if(index==-1)
                indexOfServiceFromAirline.push(val);
            else
                indexOfServiceFromAirline.splice(index,1);
        }
        setStep3({
            ...step3,
            indexOfServiceFromAirline
        })
    }
    const changeRadioHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep3({
            ...step3,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div className="desktop:px-8 desktop:pt-14 pb-11 flex flex-col">
            <div className="bg-white flex flex-col pt-12 pb-11 desktop:px-9 phone: px-5  rounded-t-10">
                <ProgressBar percent="50" className="w-full h-3 mt-2"/>
                <p className="w-65 text-3xl text-grey-1 mt-12">Reason for the disruption</p>
                <RadioGroupButton name='indexOfFlightCancellation' className="mt-11" state="col" buttonWidth ="1/2"
                label="When were you informed about flight cancellation?" required={true}
                defaultValue = {step3.indexOfFlightCancellation} onChange =  {changeRadioHandle}
                radioList = {[
                    {text:<>Less than 14 days</>, value:1},
                    {text:<>More than 14 days</>, value:2},
                    {text:<>At the airport</>, value:3}
                ]} />

                <RadioGroupButton name='indexOfDistruptOfAirline' className="mt-11" state="col" buttonWidth ="1/2"
                label="Did the airlines tell you why the flight was disrupted?" required={true}
                defaultValue = {step3.indexOfDistruptOfAirline} onChange =  {changeRadioHandle}
                radioList = {[
                    {text:<>Yes</>, value:1},
                    {text:<>No</>, value:0},
                    {text:<>Don’t remember</>, value:3}
                ]} />

                {
                step3.indexOfDistruptOfAirline == 1 &&
                <div>
                    <p className="mt-11 text-lg">What was the problem of the flight you encountered? <span className="text-red">*</span></p>
                    <div className="mt-4 grid desktop:grid-cols-4 phone:grid-cols-2 gap-6">
                        <div className={`border-blue-2 rounded-10
                        ${step3.indexOfReasonOfAirline==1?"border-1":""}`}
                        onClick={()=>setStep3({...step3, indexOfReasonOfAirline: 1})}>
                            <img src="/assets/img/step3_1.svg" className='w-full' />
                        </div>
                        <div className={`border-blue-2 rounded-10
                        ${step3.indexOfReasonOfAirline==2?"border-1":""}`}
                        onClick={()=>setStep3({...step3, indexOfReasonOfAirline: 2})}>
                            <img src="/assets/img/step3_2.svg" className='w-full'/>
                        </div>
                        <div className={`border-blue-2 rounded-10
                        ${step3.indexOfReasonOfAirline==3?"border-1":""}`}
                        onClick={()=>setStep3({...step3, indexOfReasonOfAirline: 3})}>
                            <img src="/assets/img/step3_3.svg" className='w-full'/>
                        </div>
                        <div className={`border-blue-2 rounded-10
                        ${step3.indexOfReasonOfAirline==4?"border-1":""}`}
                        onClick={()=>setStep3({...step3, indexOfReasonOfAirline: 4})}>
                            <img src="/assets/img/step3_4.svg" className='w-full'/>
                        </div>
                        <div className={`border-blue-2 rounded-10
                        ${step3.indexOfReasonOfAirline==5?"border-1":""}`}
                        onClick={()=>setStep3({...step3, indexOfReasonOfAirline: 5})}>
                            <img src="/assets/img/step3_5.svg" className='w-full'/>
                        </div>
                    </div>
                </div>
                }

                <p className="text-lg mt-11">How long were you delayed to reach the final airport? <span className="text-red">*</span></p>
                <div className="mt-4 grid desktop:grid-cols-4 phone:grid-cols-2 gap-6">

                    <div className={`border-blue-2 rounded-10
                        ${step3.indexOfServiceFromAirline.indexOf(1)>-1?"border-1":""}`}
                        onClick={()=>setServiceFromAirline(1)}>
                        <img src="/assets/img/step3_6.svg" className='w-full'/>
                    </div>

                    <div className={`border-blue-2 rounded-10
                        ${step3.indexOfServiceFromAirline.indexOf(2)>-1?"border-1":""}`}
                        onClick={()=>setServiceFromAirline(2)}>
                            <img src="/assets/img/step3_7.svg" className='w-full'/>
                    </div>
                    <div className={`border-blue-2 rounded-10
                        ${step3.indexOfServiceFromAirline.indexOf(3)>-1?"border-1":""}`}
                        onClick={()=>setServiceFromAirline(3)}>
                        <img src="/assets/img/step3_08.svg" className='w-full'/>
                    </div>
                    <div className={`border-blue-2 rounded-10
                    ${step3.indexOfServiceFromAirline.indexOf(4)>-1?"border-1":""}`}
                    onClick={()=>setServiceFromAirline(4)}>
                        <img src="/assets/img/step3_9.svg" className='w-full'/>
                    </div>

                </div>


            </div>
            <div className="flex flex-row justify-between phone:px-4 desktop:px-10 py-11 desktop:bg-blue-3 desktop:bg-opacity-25 rounded-b-10">
                <Link to={'/booking/steps/4'}><Button className="bg-red tablet:px-16 phone:px-8 py-3 text-white" name="Continue" onClick={saveStep3} /></Link>
                <Link to={'/booking/steps/2'}><Button className="bg-white bg-opacity-25 tablet:px-16 phone:px-8 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}
