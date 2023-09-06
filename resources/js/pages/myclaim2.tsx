import { useEffect } from "react"
import { Button } from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { RootState } from "../store"
import {ClaimState, updateclaim } from "../store/cms/my_claim"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useDispatch } from "react-redux"
import { FileInput } from "../components/atoms/fileinput"
import { ClaimStep1 } from "./claimstep1"
import { ClaimStep2 } from "./claimstep2"
import { useParams } from "react-router-dom"
import { ClaimStep3 } from "./claimstep3"

export const MyClaim2 = () => {
    const { claimcontent } = useAppSelector<ClaimState>(state => state.cmsclaim)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(updateclaim([ {
            imgUrl: "",
            title: "Submit your claim",
            description: "It only takes minutes to finish it! That way you’ll find out your preliminary eligibility – and the size of the compensation."
        }]))
    }, [])

    const { step } = useParams();
    console.log(step);
    return (
        <div className="pt-36">
            <div className="bg-grey-3 px-65 py-32 ">
                <div className="bg-white shadow-2xl  pl-7 rounded-10 flex  ">
                    <div className="w-110 h-190 mb-20 py-20 text-center bg-white rounded-10 border-1 ml-4 mt-16">
                       <div className="text-4xl flex justify-between items-center px-20">
                            <p className="px-2">TEA</p>
                            {/* <span> */}
                                <img src="../assets/img/air-black.svg" className="align-middle" alt="" />
                            {/* </span> */}
                            <p className="px-2">BUD</p>
                       </div>
                       <p className="pt-3" >
                            BOOKING REF : X3W4D
                       </p>
                       <p className="pt-3" >
                            The flight was delayed
                       </p>
                       <p className="pt-3" >
                            Stobart Air
                            <span className="text-gray-300">(RE1234)</span>
                       </p>
                       <p className="text-gray-300">
                            2020-01-21
                       </p>
                       <div className="rounded-10 mx-5 mt-4 border-1 flex flex-col justify-between border-orange-300">
                            <div className="m-auto py-3">
                                <img src="../assets/img/clock.svg" alt="" />
                            </div>
                            <p className="py-2 text-xl font-bold text-grey-3">Waiting for review</p>
                            <p className="py-2 text-gray-200 ">Flight details under investigation. We will<br/> inform you of next steps once we <br/>have checked the information.</p>
                       </div>
                       <div className="flex flex-col text-left pl-12">
                            <a href="#" className="text-blue-2 underline">View claim status history </a>
                            <a href="#" className="text-blue-2 underline">View claim communication history </a>
                       </div>
                       <div className="flex justify-around font-bold text-grey-2 pt-3">
                            <p>Compansation</p>
                            <p>€ 600.00</p>
                       </div>
                       <div className="flex justify-around text-grey-2 pt-3">
                            <p>Skycop renumeration(incl. VAT)</p>
                            <p>€ 450.00</p>
                       </div>
                       <div className="flex justify-around text-grey-2 pt-3">
                            <p className="text-grey-2 pt-3">Check the <span className="text-blue-2 font-semibold">Price List</span> for more details</p>
                       </div>
                    </div>
                    {(() => {
                            switch(step) {
                                case "1":
                                    return <ClaimStep1/> 
                                    break;
                                case "2":
                                    return <ClaimStep2/>
                                    break;
                                case "3":
                                    return <ClaimStep3/>
                                    break;
                                default:
                                    return false;
                            }
                        })()}
                </div>
            </div>
        </div>
    )
}