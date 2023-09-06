import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { IRadioButton, RadioGroupButton } from "../../components/atoms/RadioGroupButton"
import { IStep2 } from "../../interfaces/stopDelay/step2"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep2 } from "../../store/stopDelay"
import { CmsHomeState } from "../../store/cms/home"

export const Step2 = () => {
    const {airportinfo} = useAppSelector<CmsHomeState>(state=>state.cmsHome)
    const { step2:initStep2, initStep, step1  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step2, setStep2] = useState<IStep2>({
        indexOfStops: 0,
        issueOfFlight: 0,
        indexOfDelayingTime: 0,
        volunteerSeat: 0
    });
    useEffect(()=>{
        setStep2(initStep2)
    },[]);
    const [stopData, setStopData] = useState<IRadioButton[]>([]);
    useEffect(()=>{
        if(step1.placeOfStops.length==0)
            setStopData([{text: <div className="flex flex-row gap-5"><p>{initStep.fromAirport.name} ({initStep.fromAirport.iata})</p>
            <img src="/assets/img/airplan.svg"/><p>{initStep.toAirport.name} ({initStep.toAirport.iata})</p> </div>, value: 1}]);
        else {
            const stD: IRadioButton[] = [];
            step1.placeOfStops.map((item,k)=>{
                const stopAirport = airportinfo.filter(air=>air.id == item)[0];
                if(k==0)
                    stD.push({text: <div className="flex flex-row gap-5"><p>{initStep.fromAirport.name} ({initStep.fromAirport.iata})</p>
                    <img src="/assets/img/airplan.svg"/><p>{stopAirport.name} ({stopAirport.iata})</p> </div>, value: k+1})
                else {
                    const previouAirport = airportinfo.filter(air=>air.id == step1.placeOfStops[k-1])[0];
                    stD.push({text: <div className="flex flex-row gap-5"><p>{previouAirport.name} ({previouAirport.iata})</p>
                    <img src="/assets/img/airplan.svg"/><p>{stopAirport.name} ({stopAirport.iata})</p> </div>, value: k+1})
                    console.log('sdfsfsfsdfsfsdfsdf')
                }
                if(k==step1.placeOfStops.length-1)
                    stD.push({text: <div className="flex flex-row gap-5"><p>{stopAirport.name} ({stopAirport.iata})</p>
                    <img src="/assets/img/airplan.svg"/><p>{initStep.toAirport.name} ({initStep.toAirport.iata})</p> </div>, value: k+2});
            })
            setStopData(stD);
        }
    },[step1, initStep])
    const saveStep2 = () => {
        dispatch(updateStep2(step2));
    }
    const changeRadioHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep2({
            ...step2,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div className="desktop:px-8 desktop:pt-14 pb-11 flex flex-col">
            <div className="bg-white flex flex-col pt-12 pb-11 desktop:px-9 phone: px-5  rounded-t-10">
                <ProgressBar percent="50" className="w-full h-3 mt-2"/>
                <p className="w-65 text-3xl text-grey-1 mt-12">Type of disruption</p>
                <RadioGroupButton
                radioList={stopData}
                 defaultValue = {step2.indexOfStops} className="mt-11" state="col" buttonWidth ="full" onChange = {changeRadioHandle}
                 label="If your trip was disurapted several times, select the first flight on which the disruption occured."
                   name="indexOfStops" required={true}/>
                <p className="mt-11 text-lg">What was the problem of the flight you encountered? <span className="text-red">*</span></p>
                <div className="mt-4 grid desktop:grid-cols-4 phone:grid-cols-2 gap-6">
                    <div className={`border-blue-2 rounded-10
                        ${step2.issueOfFlight==1?"border-1":""}`}
                        onClick={()=>setStep2({...step2, issueOfFlight: 1})}>
                            <img src="/assets/img/airplane_group1.svg" className="w-full"/>
                    </div>
                    <div className={`border-blue-2 rounded-10
                        ${step2.issueOfFlight==2?"border-1":""}`}
                        onClick={()=>setStep2({...step2, issueOfFlight: 2})}>
                            <img src="/assets/img/airplane_group2.svg" className="w-full"/>
                    </div>
                    <div className={`border-blue-2 rounded-10
                        ${step2.issueOfFlight==3?"border-1":""}`}
                        onClick={()=>setStep2({...step2, issueOfFlight: 3})}>
                            <img src="/assets/img/airplane_group3.svg" className="w-full"/>
                    </div>
                    <div className={`border-blue-2 rounded-10
                        ${step2.issueOfFlight==4?"border-1":""}`}
                        onClick={()=>setStep2({...step2, issueOfFlight: 4})}>
                            <img src="/assets/img/airplane_group4.svg" className="w-full"/>
                    </div>
                </div>
                {
                    step2.issueOfFlight == 2 &&
                        <div>
                        <p className="text-lg mt-11">How long were you delayed to reach the final airport? <span className="text-red">*</span></p>
                        <div className="mt-4 grid desktop:grid-cols-4 phone:grid-cols-2 gap-12">
                            <div className={`border-blue-2 rounded-10
                                ${step2.indexOfDelayingTime==1?"border-1":""}`}
                                onClick={()=>setStep2({...step2, indexOfDelayingTime: 1})}>
                                    <img src="/assets/img/time_1.svg" className="w-full"/>
                            </div>
                            <div className={`border-blue-2 rounded-10
                                ${step2.indexOfDelayingTime==2?"border-1":""}`}
                                onClick={()=>setStep2({...step2, indexOfDelayingTime: 2})}>
                                    <img src="/assets/img/time_2.svg" className="w-full"/>
                            </div>
                            <div className={`border-blue-2 rounded-10
                                ${step2.indexOfDelayingTime==3?"border-1":""}`}
                                onClick={()=>setStep2({...step2, indexOfDelayingTime: 3})}>
                                    <img src="/assets/img/time_3.svg" className="w-full"/>
                            </div>
                            <div className={`border-blue-2 rounded-10
                                ${step2.indexOfDelayingTime==4?"border-1":""}`}
                                onClick={()=>setStep2({...step2, indexOfDelayingTime: 4})}>
                                    <img src="/assets/img/time_4.svg" className="w-full"/>
                            </div>
                        </div>
                    </div>
                }
                <RadioGroupButton  defaultValue = {step2.volunteerSeat} onChange = {changeRadioHandle} className="mt-11" name="volunteerSeat" state="col" required={true}
                label="Did you volunteer a seat to the other passenger?"
                radioList={[{text: <>Yes</>, value: 1}, {text:<>No</>, value:0}]} buttonWidth="1/2"/>
            </div>
            <div className="flex flex-row justify-between phone:px-4 desktop:px-10 py-11 desktop:bg-blue-3 desktop:bg-opacity-25 rounded-b-10">
                <Link to={'/booking/steps/3'}><Button onClick={saveStep2} disabled={!step2.indexOfStops} className={`bg-red  desktop:px-16 phone:px-8 py-3 text-white ${!step2.indexOfStops&&'bg-opacity-25'}`} name="Continue"/></Link>
                <Link to={'/booking/steps/1'}><Button className="bg-white bg-opacity-25 desktop:px-16 phone: px-8 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}
