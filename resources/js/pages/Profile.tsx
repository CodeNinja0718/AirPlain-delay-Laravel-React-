import { useEffect } from "react"
import { Button } from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { RootState } from "../store"
import {ClaimState, updateclaim } from "../store/cms/my_claim"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useDispatch } from "react-redux"
import { Alert } from "../components/atoms/Alert"
import { TextInput } from "../components/atoms/TextInput"
import { CheckBox } from "../components/atoms/CheckboxInput"
export const Profile = () => {
    const { claimcontent } = useAppSelector<ClaimState>(state => state.cmsclaim)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(updateclaim([ {
            imgUrl: "",
            title: "Submit your claim",
            description: "It only takes minutes to finish it! That way you’ll find out your preliminary eligibility – and the size of the compensation."
        }]))
    }, [])
    return (
        <div className="pt-36">
            <div className="bg-white w-full m-auto  pt-10 px-65 pb-20 ">
                <div className="w-225 bg-white rounded-10  shadow-md m-auto py-15 px-8 w-full">
                    <h1 className="text-3xl font-bold text-gray-500">Personal <br /> Information</h1>
                    {/* <Button name="aaa"/> */}
                    <Alert message="Until you complete filling-up your profile details, you won’t be able to make any actions." imgurl="assets/img/alert.svg" />
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Firstname" type="text" required label="First Name" className="block w-90"/>
                        <TextInput name="Lastname" type="text" required label="Last Name" className="block w-90" />
                    </div>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Birthdate" type="date" required label="BirthDate" className="block w-90"/>
                        <TextInput name="Phone" type="text" required label="phone number" className="block w-90 pl-28"   imgurl="assets/img/phoneinfo.png"/>
                    </div>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="email" type="text" required label="Email" className="block w-90"/>
                        <div className="w-90 flex justify-between items-center bg-gray-200 px-4 rounded-10">
                            <div>
                                <img src="assets/img/whatsapp.svg" alt="" className="min-w-min"/>
                            </div>
                            <div className="px-4">
                                <p className="pl-3">Enable this if you want for us to have the option to reach you via WhatsApp using the number provided above.</p>
                            </div>
                                <img src="assets/img/what2.svg" alt="" className="min-w-max" />
                            <div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-500">Address</h1>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Address" type="text" required label="Address" className="block w-90"/>
                        <TextInput name="City" type="text" required label="City" className="block w-90" />
                    </div>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Country" type="text" required label="Country" className="block w-90"/>
                        <TextInput name="Language" type="text" required label="Language" className="block w-90" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-500">Change Password</h1>
                    <div className="flex justify-start item-center w-full pl-52">
                        <TextInput name="Current Password" type="password" required label="Current Password" className="block w-90"/>
                    </div>
                    <div className="flex justify-evenly item-center w-full ">
                        <TextInput name="New Password" type="password" required label="New Password" className="block w-90"/>
                        <TextInput name="Repeat Password" type="password" required label="Repeat New Password" className="block w-90" />
                    </div>
                    <Button name="Cancel" className="bg-gray-400  text-white font-semibold py-2 px-16 ml-10 mt-10 text-1xl"/>
                    <h1 className="text-3xl font-bold text-gray-500 pt-5 pr-40">Stay informed and select news to receive from us</h1>
                    <CheckBox label="Useful information about our service updates and air travellers rights" className="pt-5"/>
                    <p className="pt-2 px-9">By subscribing to this newsletters group you will receive information about our new products launches and new related to our services and air passengers rights. These might include: new compensation possibilities, easier claim processing ways, etc.</p>
                    <CheckBox label="Information about air travellers rights" className="pt-5"/>
                    <p className="pt-2 px-9">By selecting to receive this information you agree to be notified about air travellers rights and changes in relations.</p>
                    <CheckBox label="Useful news for air travellers" className="pt-5"/>
                    <p className="pt-2 px-9">By subscribing to these newsletters you will receive tips, actual news for air travellers as well as special offers from us andour partners.</p>
                    <div className="w-full text-center mt-4">
                        <Link to={'/payout'}><Button name="Save Changes" className="bg-blue-2 m-auto px-5 py-2 text-white"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}