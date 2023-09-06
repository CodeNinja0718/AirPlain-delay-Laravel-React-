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
import { FileUpload } from "../components/atoms/fileupload"

export const Claimend = () => {
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
                    <div className="w-290 border-1 border-grey-4 mx-20 mt-16 mb-20 rounded-10 px-8 py-20">
                        <h1 className="font-bold text-grey-1 text-xl">Claim #a6e5ea42</h1>
                        <hr className="my-2" />
                        <div className="flex py-3">
                            <img src="../assets/img/air-blue.svg" alt="" />
                            <p className="pl-4 text-2xl">Flight Information</p>
                        </div>
                        <div className="flex justify-start py-3">
                            <p  className="px-2">Singapore(SIN)</p>
                            <img src="../assets/img/air-black.svg" alt="" />
                            <p className="px-2">London(LHR)</p>
                        </div>
                        <div>
                            <div className="flex justify-start items-center py-3">TEA
                                <span className="px-5"><img src="assets/img/red-warn.svg" alt="" /></span>
                                DUD - DCN
                            </div>
                            <table className="text-center">
                                <tr className="">
                                    <th className="px-5 text-grey-2 font-semibold">Airlines</th>
                                    <th className="px-5 text-grey-2 font-semibold">Flight number</th>
                                    <th className="px-5 text-grey-2 font-semibold">Booking ref.(PNR)</th>
                                    <th className="px-5 text-grey-2 font-semibold">Claimable flight date</th>
                                </tr>
                                <tr className="">
                                    <td className="px-5 text-grey-1 font-semibold">Airlines</td>
                                    <td className="px-5 text-grey-1 font-semibold">RE 1234</td>
                                    <td className="px-5 text-grey-1 font-semibold">Not specified</td>
                                    <td className="px-5 text-grey-1 font-semibold">2020-01-14</td>
                                </tr>
                            </table>
                            <hr className="my-2" />
                            <div className="">
                                <div className="flex items-center">
                                    <span className="pr-5 py-3">
                                        <img src="assets/img/claim.svg" alt="" />
                                    </span>
                                    <p className="text-xl font-bold text-grey-1">Claim type</p>
                                </div>
                                <table className="text-center">
                                    <tr className="">
                                        <th className="pr-5 text-grey-1 font-semibold">Type of issue</th>
                                        <th className="pr-5 text-grey-1 font-semibold">Reason</th>
                                        <th className="pr-5 text-grey-1 font-semibold">Flight delay lenght</th>
                                    </tr>
                                    <tr>
                                        <td className="pr-5 text-grey-1 font-semibold">Flight delayed</td>
                                        <td className="pr-5 text-grey-1 font-semibold">No reason</td>
                                        <td className="pr-5 text-grey-1 font-semibold">More than 3 hours</td>    
                                    </tr>
                                </table>
                                    <div className="flex items-center">
                                        <span className="pr-5 py-3">
                                            <img src="../assets/img/claim2.svg" alt="" />
                                        </span>
                                        <p className="text-xl font-bold text-grey-1">Passenger’s personal details</p>
                                    </div>
                                    <table className="text-center">
                                        <tr className="">
                                            <th className="pr-5 text-grey-1 font-semibold">Name</th>
                                            <th className="pr-5 text-grey-1 font-semibold">Passport number</th>
                                            <th className="pr-5 text-grey-1 font-semibold">Birth of date</th>
                                        </tr>
                                        <tr>
                                            <td className="pr-5 text-grey-1 font-semibold">YOSSI COHEN</td>
                                            <td className="pr-5 text-grey-1 font-semibold">123456789</td>
                                            <td className="pr-5 text-grey-1 font-semibold">14.02.1990</td>    
                                        </tr>
                                    </table>
                                <div className="bg-slate-100 my-3 py-3 px-2 rounded-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex  items-center">
                                            <span className="pr-5 py-3">
                                                <img src="../assets/img/claim3.svg" alt="" />
                                            </span>
                                            <p className="text-xl font-bold text-grey-1">Required documents</p>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center px-2">
                                                <span className="bg-green w-8 h-1 rounded-10"></span>
                                                <p className="px-3">verifiex</p>
                                            </div>
                                            <div className="flex items-center px-2">
                                                <span className="bg-yellow w-8 h-1 rounded-10"></span>
                                                <p className="px-3">on review</p>
                                            </div>
                                            <div className="flex items-center px-2">
                                                <span className="bg-red w-8 h-1 rounded-10"></span>
                                                <p className="px-3">non-available</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap w-full">
                                        <div>
                                          <img src="../assets/img/Group 965.svg" alt="" className="w-64" />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 966.svg" alt="" className="w-64"  />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 967.svg" alt="" className="w-64"  />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 968.svg" alt=""  className="w-64" />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 969.svg" alt="" className="w-64" />                      
                                        </div>
                                    </div>
                                    <div className="border-1 border-grey-3 mx-4 my-4 py-2 rounded-10">
                                        <h1 className="font-bold text-2xl text-gray-400 px-4 py-4">
                                            Passport folder
                                        </h1>
                                        <FileUpload name="+ Upload documents"/>
                                        <div className="border-1 border-gray-400 w-full rounded-10 mt-5 px-2">
                                            <table className="w-full">
                                                <tr className="border-b-1">
                                                    <th className="py-2 text-gray-400">Status</th>
                                                    <th className="py-2 text-gray-400">File</th>
                                                </tr>
                                                <tr className="text-center ">
                                                    <td className="text-gray-500 "><img src="../assets/img/surface1.svg" className="align-middle m-auto" alt="" /></td>
                                                    <td className="">Download</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-100 my-3 py-3 px-2 rounded-10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex  items-center">
                                            <span className="pr-5 py-3">
                                                <img src="../assets/img/claim3.svg" alt="" />
                                            </span>
                                            <p className="text-xl font-bold text-grey-1">Required documents</p>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex items-center px-2">
                                                <span className="bg-green w-8 h-1 rounded-10"></span>
                                                <p className="px-3">verifiex</p>
                                            </div>
                                            <div className="flex items-center px-2">
                                                <span className="bg-yellow w-8 h-1 rounded-10"></span>
                                                <p className="px-3">on review</p>
                                            </div>
                                            <div className="flex items-center px-2">
                                                <span className="bg-red w-8 h-1 rounded-10"></span>
                                                <p className="px-3">non-available</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap w-full">
                                        <div>
                                          <img src="../assets/img/Group 965.svg" alt="" className="w-64" />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 966.svg" alt="" className="w-64"  />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 967.svg" alt="" className="w-64"  />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 968.svg" alt=""  className="w-64" />                      
                                        </div>
                                        <div>
                                          <img src="../assets/img/Group 969.svg" alt="" className="w-64" />                      
                                        </div>
                                    </div>
                                    <div className="border-1 border-grey-3 mx-4 my-4 py-2 rounded-10">
                                        <h1 className="font-bold text-2xl text-gray-400 px-4 py-4">
                                            Passport folder
                                        </h1>
                                        <FileUpload name="+ Upload documents"/>
                                        <div className="border-1 border-gray-400 w-full rounded-10 mt-5 px-2">
                                            <table className="w-full">
                                                <tr className="border-b-1">
                                                    <th className="py-2 text-gray-400">Status</th>
                                                    <th className="py-2 text-gray-400">File</th>
                                                </tr>
                                                <tr className="text-center ">
                                                    <td className="text-gray-500 "><img src="../assets/img/surface1.svg" className="align-middle m-auto" alt="" /></td>
                                                    <td className="">Download</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <Link to={"/"}>
                                    <Button name="+ Add another passenger € 450" className="bg-blue-2 px-4 text-white mt-5"/>
                                </Link>
                            </div>
                        </div>
        </div>
                </div>
            </div>
        </div>
    )
}