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
export const Payout = () => {
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
                <div className="w-225 bg-white rounded-10  shadow-md m-auto py-15 px-8">
                    <h1 className="text-3xl font-bold text-gray-500">Bank transfer</h1>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Bankcountry" type="text" required label="Bank Country" className="block w-90"/>
                        <TextInput name="Currency" type="text" required label="Currency" className="block w-90" />
                    </div>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="IBAN" type="text" required label="IBAN" className="block w-90"/>
                        <TextInput name="SWIFT/BIC/Routing number *" type="text" required label="SWIFT/BIC/Routing number" className="block w-90 pl-3"/>
                    </div>
                    <Alert message="IBAN stands International Bank Account Number which consist of up to 34 alphanumeric characters. It is required on all European Union bank transfers. Other countries use them too. If you don’t know yours, ask your bank about it." imgurl="assets/img/alert.svg" />
                    {/* <h1 className="text-3xl font-bold text-gray-500">Address</h1> */}
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Banktitle" type="text" required label="Bank Title" className="block w-90"/>
                        <TextInput name="BankAdress" type="text" required label="Bank Adress" className="block w-90" />
                    </div>
                    <div className="flex justify-evenly item-center w-full">
                        <TextInput name="Firstname" type="text" required label="First Name" className="block w-90"/>
                        <TextInput name="Lastname" type="text" required label="Last Name" className="block w-90" />
                    </div>
                    {/* <Button name="Cancel" className="bg-gray-400  text-white font-semibold py-2 px-16 ml-10 mt-10 text-1xl"/> */}
                    {/* <h1 className="text-3xl font-bold text-gray-500 pt-5 pr-40">Stay informed and select news to receive from us</h1> */}
                    <CheckBox label="Check if the entered bank account number is your personal bank account number, that the account belongs to you and is registered in your name." className="pt-5"/>
                    {/* <p className="pt-2 px-9">By subscribing to this newsletters group you will receive information about our new products launches and new related to our services and air passengers rights. These might include: new compensation possibilities, easier claim processing ways, etc.</p> */}
                    <CheckBox label="Check if the entered bank account number is entered fully, with no missing characters or mistypes (e.g. number 0 vs. letter “0”)." className="pt-5"/>
                    {/* <p className="pt-2 px-9">By selecting to receive this information you agree to be notified about air travellers rights and changes in relations.</p> */}
                    <CheckBox label="Check if your first and last names matchthe first and the last names the bank account is registered in." className="pt-5"/>
                    <CheckBox label="By checking this box, I agree that, in the case of Receiver’s and/or Sender’s banks charging extract banking fees related to a failed money transfer caused by incorrectly provided banking data, the total amount of extra fees will be deducated from the final compensation amount." className="pt-5"/>
                    {/* <p className="pt-2 px-9">By subscribing to these newsletters you will receive tips, actual news for air travellers as well as special offers from us andour partners.</p> */}
                    <div className="w-full text-center mt-4">
                        <Link to={'/claim2'}><Button name="Save Changes" className="bg-blue-2 m-auto text-white px-5 py-2"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}