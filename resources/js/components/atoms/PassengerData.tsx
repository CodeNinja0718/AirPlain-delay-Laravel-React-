import {ReactElement} from 'react';
import { TextInput } from "./TextInput"

interface IPassngerData extends Partial<HTMLDivElement> {
    k: number;
    deleteData:(del_id:number)=>any;
    changeHandle : (e: React.ChangeEvent<HTMLInputElement>, kid:number)=>any
}

export const PassengerData : (props: IPassngerData)  => ReactElement = ({k, ...rest}) => {
    return(
        <div className="bg-blue-3 bg-opacity-20 mt-11 px-8 py-11 rounded-10 text-black">
            <div className='float-right' onClick={()=>rest.deleteData(k)}>
                <svg className="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
            </div>
            <div className="flex flex-row space-x-8">
                <TextInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>rest.changeHandle(e,k)} type="text" name="firstNameOfOtherPassenger" label="First Name" required={true} className="w-1/2"/>
                <TextInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>rest.changeHandle(e,k)} type="text" name="lastNameOfOtherPassenger" label="Last Name" required={true} className="w-1/2" />
            </div>
            <div className="flex flex-row space-x-8">
                <TextInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>rest.changeHandle(e,k)} type="date" name="birthdayOfOtherPassenger" label="Birthdate" required={true} className="w-1/2"/>
                <img src="/assets/img/step3_13.svg" className="mt-14 w-1/2"/>
            </div>
            <div className="flex flex-row space-x-8">
                <TextInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>rest.changeHandle(e,k)} type="email" name="emailOfOtherPassenger" label="Email" required={true} className="w-1/2"/>
                <TextInput onChange={(e: React.ChangeEvent<HTMLInputElement>)=>rest.changeHandle(e,k)} type="text" name="phoneOfOtherPassenger" label="Phone" required={true} className="w-1/2" />
            </div>
        </div>
    )
}
