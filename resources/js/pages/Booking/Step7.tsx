import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { TextInput } from "../../components/atoms/TextInput"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep7 } from "../../store/stopDelay"
import { stopDelayApi } from "../../services/stopDelayApi";
import { IStep7 } from "../../interfaces/stopDelay/step7"
import { PassengerData } from "../../components/atoms/PassengerData"
import { RadioGroupButton } from "../../components/atoms/RadioGroupButton"
export const Step7 = () => {
    // const { step1, step2, step3, step4, step5, step6, step7 } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    // useEffect(()=>{
    //     stopDelayApi.saveSteps({
    //         step1_data : step1,
    //         step2_data : step2,
    //         step3_data : step3,
    //         step4_data : step4,
    //         step5_data : step5,
    //         step6_data : step6,
    //         step7_data : step7
    //     })
    // },[]);
    const { step7:initStep7  } = useAppSelector<StopDelayState>(state=> state.stopDelay)
    const dispatch = useAppDispatch();
    const [step7, setStep7] = useState<IStep7>({
        indexOfWith : 0, //Togetheror Alone
        firstNameOfOtherPassenger : [],
        lastNameOfOtherPassenger: [],
        birthdayOfOtherPassenger: [],
        emailOfOtherPassenger : [],
        phoneOfOtherPassenger: []
    });
    useEffect(()=>{
        setStep7(initStep7)
    },[]);

    const deleteData = (del_id:number) => {
        const pass = addPasenger;
        pass.splice(del_id,1);
        setAddPassenger(pass);
    }
    const changeHandle = (e: React.ChangeEvent<HTMLInputElement>, kid:number) => {
        let st7  = step7;
        st7[e.target.name][kid]=e.target.value;
        setStep7(st7);
    }
    const changeIndexofWidth  = () => {

    }
    const [addPasenger, setAddPassenger]  = useState<Array<JSX.Element>>([<PassengerData k={0} deleteData={deleteData} changeHandle={changeHandle}/>]);
    const newPassenger = () => {
        setAddPassenger([...addPasenger, <PassengerData k={addPasenger.length} deleteData={deleteData} changeHandle={changeHandle}/>]);
    }
    const changeRadioHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep7({
            ...step7,
            [e.target.name] : e.target.value
        })
    }
    const saveStep7  = () => {
        dispatch(updateStep7(step7));
    }

    return(
        <div className="px-8 pt-14 pb-11 flex flex-col">
            <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9  rounded-t-10 ">
                <div className="flex flex-row space-x-4">
                    <p className="text-grey-1 text-xl">PROGRESS</p>
                    <ProgressBar percent="50" className="w-4/5 h-3 mt-2"/>
                </div>
                <p className="text-sm mt-10">Flight from <b>Tel Aviv (TLV)</b> to <b>Budapest (BUD)</b> flight diley - more than 8 hours</p>
                <p className="w-65 text-3xl text-grey-1 mt-8">Optional: <b>Other passengers</b></p>
                <p className="text-sm w-2/3 mt-4">Where you travelling with companions on the same booking reference? Provide us with their information and we help them as well!</p>
                <img src="/assets/img/step3-10.svg" className="w-2/3 mt-11" />
                <RadioGroupButton name="indexOfWith" state="row" buttonWidth="1/2" defaultValue={step7.indexOfWith} onChange={changeRadioHandle}
                radioList={[{text:<>No, Iwas travelling alone</>, value: 0},{text:<>Yes, I’ll include fellow passengers</>, value:1}]} />
                {step7.indexOfWith==1 &&     addPasenger}
                <Button onClick={newPassenger} className="bg-blue-2 mt-6 w-5/12 px-6 py-4" name="+ Add another passengers € 450"/>
            </div>
            <div className="flex flex-row pl-9 py-11 bg-blue-3 bg-opacity-25 space-x-8 rounded-b-10">
                <Link to={'/booking/steps/8'}><Button onClick = {saveStep7} className="bg-red px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/6'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}
