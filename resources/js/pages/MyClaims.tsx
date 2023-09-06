import { useEffect } from "react"
import { Button } from "../components/atoms/Button"
import { Link } from "react-router-dom"
import { RootState } from "../store"
import {ClaimState, updateclaim } from "../store/cms/my_claim"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useDispatch } from "react-redux"


export const MyClaims = () => {
    const { claimcontent } = useAppSelector<ClaimState>(state => state.cmsclaim)
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("OKK")
        dispatch(updateclaim([ {
            imgUrl: "",
            title: "Submit your claim",
            description: "It only takes minutes to finish it! That way you’ll find out your preliminary eligibility – and the size of the compensation."
        }]))
    }, [])

    return (
        <div className="pt-36">
            <div className="bg-grey-3 h-290 pt-10 px-65 pb-90 ">
                <div className="h-full bg-white shadow-2xl  pt-15 pl-7 rounded-10 flex items-center">
                    <div>
                        <h1 className=" font-bold text-gray-1 text-4xl">My flights</h1>
                        <div className="flex justify-center items-center w-96 h-110 border-1 rounded-10 mt-6">
                        <Link to={'/'}>
                            <Button name="create new claim" className="bg-blue-1 px-4 py-3 font-semibold  text-white text-2xl"/> 
                        </Link>
                        </div>
                    </div>
                    <div className="w-96 h-110 text-center bg-white rounded-10 border-1 ml-4 mt-16">
                       <div className="text-4xl flex justify-between items-center pt-2 px-24">
                            <p>TEA</p>
                            <span>
                                <img src="assets/img/airplan.png" alt="" />
                            </span>
                            <p>BUD</p>
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
                                <img src="assets/img/clock.svg" alt="" />
                            </div>
                            <p className="py-2 text-xl font-bold text-grey-3">Waiting for review</p>
                            <p className="py-2 text-gray-200 ">Flight details under investigation. We will<br/> inform you of next steps once we <br/>have checked the information.</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}