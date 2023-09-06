import { useEffect } from "react"
import { Button } from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { RootState } from "../store"
import {ClaimState, updateclaim } from "../store/cms/my_claim"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useDispatch } from "react-redux"
import { FileInput } from "../components/atoms/fileinput"

export const Permissionofclaim = () => {
    return(
        <div className="pt-36">
            <div className="bg-gray-300 py-20">
                <div className="bg-white rounded-10 w-300  m-auto p-15 shadow-md  ">
                    <div className="scroll-m-4 overflow-y-scroll h-225 border-1 border-gray-300  px-4 py-5 rounded-10">    
                        <p className="text-5xl font-bold text-gray-400">Contract</p>
                        <p className="pt-5 px-5 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="pt-5 px-5 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="pt-5 px-5 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="pt-5 px-5 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="pt-5 px-5 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="pt-5 px-5 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div>
                        <p className="text-5xl py-5 font-bold text-gray-400">Sign permission to handle claim</p>
                        <p className="text-2xl text-gray-400 py-6">Write your 
                            <span className="font-bold text-gray-600"> signature below</span> as it appears on your ID. It's required by airlines to collect the compensation for you. By signing you agree with the 
                            <span className="text-blue-2 font-bold"> Assignment Form</span> and <span className="text-blue-2 font-bold"  >  Price List</span>
                        </p>
                        <div className="bg-gray-300 rounded-10 px-10 py-5">
                            <p className="text-center text-2xl font-bold text-gray-500 py-5">YOSI DAVID (You)</p>
                            <div className="bg-white rounded-10 text-center text-2xl pb-15">
                                <img src="assets/img/laptop 1.svg" className="pt-8 m-auto" alt=""/>
                                <p className="font-bold text-gray-400">Click and draw you signature</p>
                                <p className="text-gray-300 ">It must match the one on your ID.</p>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center">
                            <Link to={'/claimend'}>
                                <Button name="Save" className="bg-blue-2 mx-3 text-white px-16 text-2xl font-bold  py-2 "/>
                            </Link>
                            <Button name="Read the Price list" className="bg-white font-bold  mx-3 text-blue-2 border-1 border-blue-2 px-16 text-2xl  py-2 "/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}