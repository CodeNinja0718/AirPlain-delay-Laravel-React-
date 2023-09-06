import { Link } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { TextInput } from "../../components/atoms/TextInput"

export const Step8 = () => {
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
                <RadioGroupInput name="choose" state="row" buttonWidth="1/2"
                radioList={[<>No, Iwas travelling alone</>,<>Yes, I’llinclude fellow passengers</>]} />
                <div className="bg-blue-3 bg-opacity-20 mt-11 px-8 py-11 rounded-10 text-black">
                    <div className="flex flex-row space-x-8">
                        <TextInput type="text" name="airline" label="First Name" required={true} className="w-1/2"/>
                        <TextInput type="text" name="fightDate" label="Last Name" required={true} className="w-1/2" />
                    </div>
                    <div className="flex flex-row space-x-8">
                        <TextInput type="text" name="airline" label="Birthdate" required={true} className="w-1/2"/>
                        <img src="/assets/img/step3_13.svg" className="mt-14 w-1/2"/>
                    </div>
                    <div className="flex flex-row space-x-8">
                        <TextInput type="text" name="airline" label="Email" required={true} className="w-1/2"/>
                        <TextInput type="text" name="fightDate" label="Phone" required={true} className="w-1/2" />
                    </div>
                </div>
                <Button className="bg-blue-2 mt-6 w-5/12 px-6 py-4" name="+ Add another passengers € 450"/>
            </div>
            <div className="flex flex-row pl-9 py-11 bg-blue-3 bg-opacity-25 space-x-8 rounded-b-10">
                <Link to={'/booking/steps/9'}><Button className="bg-red bg-opacity-25 px-16 py-3 text-white" name="Continue"/></Link>
                <Link to={'/booking/steps/7'}><Button className="bg-white bg-opacity-25 px-16 py-3 border-blue-2 text-blue-2 border-1" name="Back"/></Link>
            </div>
        </div>
    )
}