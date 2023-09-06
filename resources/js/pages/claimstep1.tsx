import { useEffect } from "react"
import { Button } from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { RootState } from "../store"
import {ClaimState, updateclaim } from "../store/cms/my_claim"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useDispatch } from "react-redux"
import { FileInput } from "../components/atoms/fileinput"
import { FileUpload } from "../components/atoms/fileupload"

export const ClaimStep1 = () => {
    return(
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
                                <div className="bg-slate-100 my-3 py-3 px-2">
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
                                    <hr className="my-5" />
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
                                                    <th className="py-2 text-gray-400">Number</th>
                                                </tr>
                                                <tr className="text-center">
                                                    <td className="text-gray-500 flex justify-center"><img src="../assets/img/surface1.svg" className="align-middle" alt="" /></td>
                                                    <td className="text-gray-500">adfka</td>
                                                    <td className="text-gray-500">adfka</td>
                                                    <td className="text-blue-2 flex justify-center">Download <div className="px-2"><img src="../assets/img/downloadsign.svg" alt="" /></div></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-100 my-3 py-3 px-2">
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
                                    <hr className="my-5" />
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
                                                    <th className="py-2 text-gray-400">Number</th>
                                                </tr>
                                                <tr className="text-center">
                                                    <td className="text-gray-500 flex justify-center"><img src="../assets/img/surface1.svg" className="align-middle" alt="" /></td>
                                                    <td className="text-gray-500">adfka</td>
                                                    <td className="text-gray-500">adfka</td>
                                                    <td className="text-blue-2 flex justify-center">Download <div className="px-2"><img src="../assets/img/downloadsign.svg" alt="" /></div></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div> 
                                <Link to={"/claim2/3"}>
                                    <Button name="+ Add another passenger € 450" className="bg-blue-2 px-4 text-white mt-5"/>
                                </Link>
                            </div>
                        </div>
        </div>
    )
}