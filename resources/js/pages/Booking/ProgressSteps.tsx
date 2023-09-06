import { url } from "inspector"
import { useParams } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { useAppSelector } from "../../store/hooks"
import { StopDelayState } from "../../store/stopDelay"
import { Step1 } from "./Step1"
import { Step2 } from "./Step2"
import { Step3 } from "./Step3"
import { Step4 } from "./Step4"
import { Step5 } from "./Step5"
import { Step6 } from "./Step6"
import { Step7 } from "./Step7"
import { Step8 } from "./Step8"
import { Step9 } from "./Step9"
import { Step10 } from "./Step10"
import { Step11 } from "./Step11"
import { Step12 } from "./Step12"
import { Step13 } from "./Step13"
import { Step14 } from "./Step14"
import { Step15 } from "./Step15"
import { Step21 } from "./Step21"
import { useEffect, useState } from "react"

export const ProgressSteps = () => {
    const { step1, initStep } = useAppSelector<StopDelayState>(state => state.stopDelay)
    const { step } = useParams();
    const [initData, setInitData] = useState({
        distance: 0,
        price: 0,
    })
    useEffect(()=>{
        const R = 6371;
        const lat1_rad = (initStep.fromAirport.lat * Math.PI) / 180;
        const lon1_rad = (initStep.fromAirport.lon * Math.PI) / 180;
        const lat2_rad = (initStep.toAirport.lat * Math.PI) / 180;
        const lon2_rad = (initStep.toAirport.lon * Math.PI) / 180;
        const dlat = lat2_rad - lat1_rad
        const dlon = lon2_rad - lon1_rad
        const a = Math.sin(dlat / 2) * 2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon / 2)*2
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = Math.floor(R * c);
        let price = 0;
        if (distance <= 1500 && distance>0)
            price = 250;
        else {
            if(distance <= 3500)
                price = 400;
            else
                price = 600
        }
        setInitData({
            price,
            distance
        })

    },[initStep])
    return (
        <div className="pt-28">
            <div className="bg-gray-100 desktop:pt-10 pb-15 flex justify-center">
                <div className="h-full w-[1400px] flex desktop:flex-row tablet:flex-col phone:flex-col desktop:mt-10 desktop:gap-3">
                    <div className="flex flex-col desktop:w-1/3 tablet:w-full phone:w-full">
                        <div className="desktop:px-8 py-12 flex flex-col bg-white rounded-10 shadow-md" >
                            {
                                step == "1" ?
                                    <div className="bg-white w-full flex flex-col justify-center pt-14 pb-11 px-9 rounded-10 shadow-md">
                                        <p className="text-xl text-center desktop:block phone:hidden">Welcome</p>
                                        <p className="text-lg mt-4 text-center desktop:block phone:hidden">Please follow these simple steps and fill out the claim form.</p>
                                        <div className="flex w-full justify-center flex-col border-1 border-blue-2 rounded-10 mt-4 h-72">
                                            <div className="flex justify-center"><img src="/assets/img/step1/1.svg" className="w-11" /></div>
                                            <p className="text-lg text-blue-2 text-center mt-2">Attention! Don't miss out <br /> compensation up to € 3 000</p>
                                        </div>
                                        <div className="flex justify-center desktop:block phone:hidden"><Button name="More Info" className="w-52 border-blue-2 border-1 py-2 mt-4" /></div>
                                    </div>
                                    :
                                    <div className="bg-white w-full grid justify-items-stretch pt-12 pb-11 px-9 rounded-10 shadow-md">
                                        <p className="text-blue-2 justify-self-center">Good news!</p>
                                        <div className="w-full rounded-10 mt-4 border-blue-2 border-2 pt-12 pb-10 px-9 flex flex-col">
                                            <p className="w-full text-center">Since your flight was 3589 km you may be entited to a compensation of</p>
                                            <p className="w-full mt-6 text-center text-5lg text-blue-2">€ 600</p>
                                            <p className="w-full text-lg text-center text-bue-2">per passenger</p>
                                        </div>
                                        <div className="px-8 py-5 flex flex-row gap-4 mt-7 bg-blue-2 bg-opacity-5 rounded-10">
                                            <img className="h-5" src="/assets/img/i-icon.png" />
                                            <p className="text-center text-xs">On average it takes 12 weeks. In some cases the procces might take longer</p>
                                        </div>
                                    </div>
                            }
                            <div className="flex w-full justify-center mt-6 desktop:block phone:hidden">
                                <div className="flex w-full justify-center"><img src="/assets/img/v2_logos.png" /></div>
                            </div>
                            <div className="mt-11 pt-7 px-5 pb-11 rounded-10 gap-1 bg-blue-3 bg-opacity-25 shadow-md desktop:block phone:hidden">
                                <div className="flex flex-col mr-1">
                                    <div className="flex flex-row gap-1">
                                        <div className="h-5" style={{ background: "url('/assets/img/grey_vector.png')" }}><img src="/assets/img/white_star.png" /></div>
                                        <div className="h-5" style={{ background: "url('/assets/img/grey_vector.png')" }}><img src="/assets/img/white_star.png" /></div>
                                        <div className="h-5" style={{ background: "url('/assets/img/grey_vector.png')" }}><img src="/assets/img/white_star.png" /></div>
                                        <div className="h-5" style={{ background: "url('/assets/img/grey_vector.png')" }}><img src="/assets/img/white_star.png" /></div>
                                        <div className="h-5" style={{ background: "url('/assets/img/grey_vector.png')" }}><img src="/assets/img/white_star.png" /></div>
                                        <p className="ml-2 text-xs">4,7 out of 5</p>
                                    </div>
                                    <div className="mb-2">
                                        <img src="/assets/img/trut_img.png" />
                                    </div>
                                </div>
                                <p className="mt-6 text-left text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p className="mt-11 text-lg">Linda</p>
                                <div className="bg-grey-5 mt-15 px-8 py-1 text-white text-lg w-52 rounded-10">15 007 REVIEWS</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col desktop:w-2/3 tablet:w-full phone:w-full relative bg-white rounded-10 shadow-md">
                        {(() => {
                            switch (step) {
                                case "1":
                                    return <Step1 />
                                    break;
                                case "2":
                                    return <Step2 />
                                    break;
                                case "3":
                                    return <Step3 />
                                    break;
                                case "4":
                                    return <Step4 />
                                    break;
                                case "5":
                                    return <Step5 />
                                    break;
                                case "6":
                                    return <Step6 />
                                    break;
                                case "7":
                                    return <Step7 />
                                    break
                                case "8":
                                    return <Step8 />
                                    break;
                                case "9":
                                    return <Step9 />
                                    break;
                                case "10":
                                    return <Step10 />
                                    break;
                                case "11":
                                    return <Step11 />
                                    break;
                                case "12":
                                    return <Step12 />
                                    break;
                                case "13":
                                    return <Step13 />
                                    break;
                                case "14":
                                    return <Step14 />
                                    break;
                                case "15":
                                    return <Step15 />
                                    break;
                                case "21":
                                    return <Step21 />
                                    break;
                                default:
                                    return false;
                            }
                        })()}
                    </div>
                </div>
            </div>
        </div>
    )
}
