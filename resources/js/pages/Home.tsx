import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { RootState } from "../store"
import { CmsHomeState, updateairportinfo, updateHowDoesItWork } from "../store/cms/home"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useDispatch } from "react-redux"

import { homeApi } from "../services/homeApi";
import { type } from "os"
import { SelectButton } from "../components/atoms/SelectButton"
import { IAirportdata } from "../interfaces/cms/airportdata"
import { Button } from "../components/atoms/Button"
import { IinitStep } from "../interfaces/stopDelay/initStep"
import { setInitStep } from "../store/stopDelay"
import { SearchSelect } from "../components/atoms/SearchSelect"
export const Home = () => {
    const { howDoesItAllWork, airportinfo } = useAppSelector<CmsHomeState>(state => state.cmsHome);

    const [airportdata, setairportdata] = useState<Array<IAirportdata>>([]);
    const dispatch = useAppDispatch();
    const [airport, setAirport] = useState<IinitStep>({
        fromAirport: {
            iata : '',
            city : '',
            name : '',
            id: 0,
            lat: 0,
            lon: 0
        },
        toAirport : {
            iata : '',
            city : '',
            name : '',
            id: 0,
            lat: 0,
            lon: 0
        }
    })
    useEffect(() => {
        homeApi.getairportdata().then((result) => {
            setairportdata(result);
            dispatch(updateairportinfo(result));
        })
    }, [])
    const saveAirport = () => {
        dispatch(setInitStep(airport))
    }
    const startAirport = (item: IAirportdata) => {
        setAirport({
            ...airport,
            fromAirport: item
        })
    }
    const arriveAirport = (item: IAirportdata) => {
        setAirport({
            ...airport,
            toAirport: item
        })
    }
    const scrolltop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            <div className="relative">
                <img className="tablet:hidden desktop:block h-100 absolute" src="assets/img/b2.png" alt="" />
                <img className="phone:hidden tablet:h-290 tablet:block tablet:w-200  desktop:hidden absolute" src="assets/img/bg_tablet.png" alt="" />
                <img className="tablet:hidden phone:block phone:w-190 phone:h-300 desktop:hidden absolute" src="assets/img/bg_tablet.png" alt="" />
            </div>
            {/* Background */}
            <div className="relative desktop:pt-48 tablet:pt-48 phone:pt-36">
                <div className="phone:w-80 tablet:w-134 desktop:w-290 desktop:h-72 m-auto bg-white font-Montserrat rounded-10 shadow-grey-1 drop-shadow-md tablet:p-5 phone:p-2">
                    <h1 className="text-blue-1 text-4xl  pt-2 align-middle text-center">Was your flight disrupted?</h1>
                    <p className="text-grey-1 pt-2 text-center">Turn your delayed, cancelled or overbooked flight into a compensation up to $ 700!</p>
                    <div className="flex px-10 pt-5 justify-around items-center gap-4 desktop:flex-row tablet:flex-col phone:flex-col">
                        <SearchSelect img="start" searchResult={startAirport} className="desktop:w-1/3 tablet:w-full" />
                        <SearchSelect img="arrive" searchResult={arriveAirport} className="desktop:w-1/3 tablet:w-full" />
                        <div onClick={saveAirport} className="px-10 py-4 rounded-10 text-white text-center bg-red font-bold desktop:w-1/3 tablet:w-3/4"><Link to={'/booking/steps/1'}>Подати вимогу просто зараз</Link></div>
                    </div>
                    <div className="flex justify-center items-center pt-10 flex-wrap gap-4">
                        <div className="  flex items-center px-2"><span className="pr-2"><img className="border-b-1 border-blue-1" src="assets/img/icon/bottle.svg" /></span>Аеропорт відправлення</div>
                        <div className="  flex items-center px-2"><span className="pr-2"><img className="border-b-1 border-blue-1" src="assets/img/icon/avatar.svg" /></span>Аеропорт відправлення</div>
                        <div className="  flex items-center px-2"><span className="pr-2"><img className="border-b-1 border-blue-1" src="assets/img/icon/israel.svg" /></span>Аеропорт відправлення</div>
                        <div className="  flex items-center px-2"><span className="pr-2"><img className="border-b-1 border-blue-1" src="assets/img/icon/european-union.svg" /></span>Аеропорт відправлення</div>
                    </div>
                </div>
                <div className="pt-90 tablet:pt-72 phone:pt-52 w-full bottom-2 flex desktop:px-56 tablet:px-5 phone:px-5 phone:flex-col tablet:flex-row gap-3">
                    <div className="p-8 mx-3 bg-white font-Montserrat rounded-10 shadow-grey-1 drop-shadow-md ">
                        <p className="text-blue-1 text-1xl  py-2 align-middle text-center flex justify-items-center items-center" ><img className="pl-6 pr-4" src="assets/img/icon/positive-vote1.svg" />Легко і швидко</p>
                        <p className="text-grey-1 p-6 text-left">Оформлення заявки займає лише 3 хвилини. Про все інше подбаємо ми!</p>
                    </div>
                    <div className="p-4  mx-3 bg-white font-Montserrat rounded-10 shadow-grey-1 drop-shadow-md">
                        <p className="text-blue-1 text-1xl  py-2 align-middle text-center items-center flex" ><img className="pl-6 pr-4" src="assets/img/icon/save-money.svg" />Жодних фінансових ризиків    </p>
                        <p className="text-grey-1 p-6 text-left">Оформлення заявки займає лише 3 хвилини. Про все інше подбаємо ми!</p>
                    </div>
                    <div className="p-4 mx-3 bg-white font-Montserrat rounded-10 shadow-grey-1 drop-shadow-md">
                        <p className="text-blue-1 text-1xl  py-2 align-middle text-center items-center flex" ><img className="pl-6 pr-4" src="assets/img/icon/clock.svg" />  Подавайте заявку на давні рейси</p>
                        <p className="text-grey-1 p-6  text-left">Оформлення заявки займає лише 3 хвилини. Про все інше подбаємо ми!</p>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div className="w-full h-full m-auto flex justify-around items-center py-20 desktop:px-60 tablet:px-10 phone:px-10 bg-blue-2 bg-opacity-10 relative">
                <div id="default-carousel" className="relative w-full phone:hidden tablet:hidden desktop:block" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-36">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >

                                <img src="assets/img/icon/image 5.svg" alt="..." />
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                                <img src="assets/img/icon/image 7.svg" alt="..." />
                                <img src="assets/img/icon/image 8.svg" alt="..." />
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 4.svg" alt="..." />
                                <img src="assets/img/icon/image 5.svg" alt="..." />
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                                <img src="assets/img/icon/image 7.svg" alt="..." />
                                <img src="assets/img/icon/image 8.svg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    </div>

                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                <div id="default-carousel" className="relative w-full phone:hidden tablet:block desktop:hidden" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-36">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 4.svg" alt="..." />
                                <img src="assets/img/icon/image 5.svg" alt="..." />
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 5.svg" alt="..." />
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                                <img src="assets/img/icon/image 7.svg" alt="..." />
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                                <img src="assets/img/icon/image 7.svg" alt="..." />
                                <img src="assets/img/icon/image 8.svg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    </div>

                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                <div id="default-carousel" className="relative w-full phone:block tablet:hidden desktop:hidden" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-36">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 4.svg" alt="..." />
                                <img src="assets/img/icon/image 5.svg" alt="..." />
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 5.svg" alt="..." />
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 6.svg" alt="..." />
                                <img src="assets/img/icon/image 7.svg" alt="..." />
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <img src="assets/img/icon/image 7.svg" alt="..." />
                                <img src="assets/img/icon/image 8.svg" alt="..." />
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    </div>

                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
            {/* feature */}
            <div className="py-20 bg-blue-2 bg-opacity-5 w-full desktop:px-80 tablet:px-5 phone:px-5 ">
                <p className="pt-5 text-blue-2 text-3xl text-center font-bold">How does it all work?</p>
                <p className="pt-4 text-center text-grey-1">Claiming your compensation via Skycop is an easy three-step process</p>
                <div className="flex justify-evenly items-center py-10 relative tablet:flex-row phone:flex-col">
                    <img src="assets/img/icon/2/a1.svg" className="w-80" alt="" />
                    <div className="w-80 px-0 tablet:text-left phone:text-center ">
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold text-2xl">Submit your claim</h3>
                        <p className=" text-grey-2 ">It only takes minutes to finish it! That way you’ll find out your preliminary eligibility – and the size of the compensation.</p>
                    </div>
                </div>
                <div className="flex justify-evenly items-center py-10 relative z-10 tablet:flex-row phone:flex-col ">
                    <img src="assets/img/icon/2/a2.svg" className="w-80 phone:block tablet:hidden" alt="" />
                    <div className="w-80 px-0 tablet:text-left phone:text-center">
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold text-2xl">We fight for your rights</h3>
                        <p className=" text-grey-2 ">Our experts will be checking your eligibility in depth, contacting the airlines, working with the authorities and so on.</p>
                    </div>
                    <img src="assets/img/icon/2/a2.svg" className="w-80 phone:hidden tablet:block" alt="" />
                </div>
                <div className="flex justify-evenly items-center py-10 relative tablet:flex-row phone:flex-col">
                    <img src="assets/img/icon/2/a3.svg" className="w-80" alt="" />
                    <div className="w-80 px-0 tablet:text-left phone:text-center">
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold text-2xl"> Receive your compensation</h3>
                        <p className=" text-grey-2 ">Once we receive the compensation, we will transfer the money to you, minus our fee. You don’t pay if we don’t win.</p>
                    </div>
                </div>
                {/* <div className="flex gap-32 flex-col text-white justify-center relative">
                    <span className="w-10 py-2 text-center bg-blue-1 rounded-full">1</span>
                    <span className="w-10 py-2 text-center bg-blue-1 rounded-full">2</span>
                    <span className="w-10 py-2 text-center bg-blue-1 rounded-full">3</span>
                    <span className="absolute  border-r-1 border-red  -top-0  border-dashed h-full mt-2 left-5">
                    </span>
                </div> */}
                <div className="w-full text-center pt-5">
                    <div onClick={scrolltop}>
                        <Button name="claim" className="bg-red text-white font-semibold px-16 py-3 text-xl" />
                    </div>
                </div>
            </div>
            {/* airport */}
            <div className="py-20 w-full desktop:px-60 tablet:p-5 phone:p-5">
                <p className="pt-5 text-blue-2 text-3xl text-center font-bold">Know your rights</p>
                <p className="pt-4 text-center text-grey-1">If the airline was responsible for your flight disruption, it‘s always good to know <br />your rights - you might get flight compensation.</p>
                <div className="text-center flex desktop:flex-row tablet:flex-row phone:flex-col pt-5">
                    <div className="text-center m-3 bg-white shadow-grey-1 drop-shadow-md py-5 px-10 rounded-10">
                        <img src="assets/img/icon/3/1.svg" className=" m-auto" alt="" />
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold">Delayed flight compensation</h3>
                        <p className=" text-grey-2 desktop:px-20 tablet:px-2 phone:px-2">Time is money - if your flight was late to arrive at the final destination by more than 3 hours, you are eligible for a compensation.</p>
                    </div>
                    <div className="text-center m-3 bg-white shadow-grey-1 drop-shadow-md py-5 px-10 rounded-10">
                        <img src="assets/img/icon/3/2.svg" className=" m-auto" alt="" />
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold">Cancelled flight compensation</h3>
                        <p className=" text-grey-2 desktop:px-20 tablet:px-2 phone:px-2">Time is money - if your flight was late to arrive at the final destination by more than 3 hours, you are eligible for a compensation.</p>
                    </div>
                </div>
                <div className="text-center flex desktop:flex-row tablet:flex-row phone:flex-col  pt-5">
                    <div className="text-center m-3 bg-white shadow-grey-1 drop-shadow-md py-5 px-10 rounded-10">
                        <img src="assets/img/icon/3/3.svg" className=" m-auto" alt="" />
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold">Overbooked flight compensation</h3>
                        <p className=" text-grey-2 desktop:px-20  tablet:px-2 phone:px-2">Time is money - if your flight was late to arrive at the final destination by more than 3 hours, you are eligible for a compensation.</p>
                    </div>
                    <div className="text-center m-3 bg-white shadow-grey-1 drop-shadow-md py-5 px-10 rounded-10">
                        <img src="assets/img/icon/3/4.svg" className=" m-auto" alt="" />
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold">Air passenger rights</h3>
                        <p className=" text-grey-2  desktop:px-20 tablet:px-2 phone:px-2">Time is money - if your flight was late to arrive at the final destination by more than 3 hours, you are eligible for a compensation.</p>
                    </div>
                </div>
                <div className="text-center flex desktop:flex-row tablet:flex-row phone:flex-col  pt-5">
                    <div className="text-center m-3 bg-white shadow-grey-1 drop-shadow-md py-5 px-10 rounded-10">
                        <img src="assets/img/icon/3/5.svg" className=" m-auto" alt="" />
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold">Lost suitcase</h3>
                        <p className=" text-grey-2 desktop:px-20  tablet:px-2 phone:px-2">Time is money - if your flight was late to arrive at the final destination by more than 3 hours, you are eligible for a compensation.</p>
                    </div>
                    <div className="text-center m-3 bg-white shadow-grey-1 drop-shadow-md py-5 px-10 rounded-10">
                        <img src="assets/img/icon/3/6.svg" className=" m-auto" alt="" />
                        <h3 className="text-blue-2 text-4ml pb-2 font-bold">Personal accidents</h3>
                        <p className=" text-grey-2  desktop:px-20  tablet:px-2 phone:px-2">Time is money - if your flight was late to arrive at the final destination by more than 3 hours, you are eligible for a compensation.</p>
                    </div>
                </div>
            </div>
            {/* procedure */}
            <div className="bg-blue-1 bg-opacity-5 relative px-5 py-10" >
                <p className="pt-5 text-blue-2 text-3xl text-center font-bold">How much we have already returned to our customers</p>
                <p className="pt-4 text-center text-grey-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                <div className="py-10  px-5 flex  items-center flex-wrap justify-center">
                    <div id="default-carousel" className="relative w-full phone:hidden tablet:hidden desktop:block" data-carousel="slide">
                        <div className="relative overflow-hidden rounded-lg h-80">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/1.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/2.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/3.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/4.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/5.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/6.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/7.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/8.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/9.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/10.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/1.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/2.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/3.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/4.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/5.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/6.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/7.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/8.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/9.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/10.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        </div>

                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <div id="default-carousel" className="relative w-full phone:hidden tablet:block  desktop:hidden" data-carousel="slide">
                        <div className="relative overflow-hidden rounded-lg tablet:h-80">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/1.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/2.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/3.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/4.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/5.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/6.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/7.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/8.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/7.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/8.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/9.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/10.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="0"></button>
                        </div>
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                    <div id="default-carousel" className="relative w-full phone:block tablet:hidden  desktop:hidden" data-carousel="slide">
                        <div className="relative overflow-hidden rounded-lg phone:h-80">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-5 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/1.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/2.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/3.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/4.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-5 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px5 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/5.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-5 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/6.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-5 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/7.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-5  text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/8.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                <div className="absolute px-5 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                    <div>
                                        <span className="px-5 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/7.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-5 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/8.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="px-5 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/9.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                        <span className="px-10 text-center flex flex-col justify-between w-72 h-40">
                                            <img className="m-auto " src="assets/img/icon/4/10.svg" alt="" />
                                            <p className="bg-yellow text-blue-2 px-5 py-1 font-bold text-3xl">€ 160 000</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-30 flex space-x-1 -translate-x-1/2 bottom-5 left-1/2">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="0"></button>
                        </div>
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
                <img src="assets/img/icon/4/airplane.svg" className="absolute bottom-0 right-0 -z-10" alt="" />
            </div>
            {/* money from company */}
            <div className="bg-white py-10">
                <p className="pt-5 text-blue-2 text-3xl text-center font-bold">What our clients say about us</p>
                <p className="pt-5 text-grey-2 text-1xl text-center font-bold">Skycop is rated “Great” on Trustpilot</p>
                <div className="flex justify-center items-center flex-wrap gap-4">
                    <img src="assets/img/icon/5/1.svg" alt="" />
                    <div className="flex justify-center items-center text-xl font-bold text-grey-2 pr-2"><span className="text-blue-1 font-bold text-2xl">4,7 </span> out of 5 </div>
                    <div className="flex justify-start bg-grey-1 ">
                        <span className='shadow-sm bg-green py-2 px-2'>
                            <img src='assets/img/icon/5/star.svg' alt="" />
                        </span>
                        <span className="w-3 h-8 bg-white first-letter"></span>
                        <span className="shadow-sm bg-green py-2 px-2">
                            <img src="assets/img/icon/5/star.svg" alt="" />
                        </span>
                        <span className="w-3 h-8 bg-white first-letter"></span>
                        <span className="shadow-sm bg-green py-2 px-2">
                            <img src="assets/img/icon/5/star.svg" alt="" />
                        </span>
                        <span className="w-3 h-8 bg-white first-letter"></span>
                        <span className="shadow-sm bg-green py-2 px-2">
                            <img src="assets/img/icon/5/star.svg" alt="" />
                        </span>
                        <span className="w-3 h-8 bg-white first-letter"></span>
                        <span className="shadow-sm  bg-blend-multiply py-2 px-2 ">
                            <img src="assets/img/icon/5/star.svg" alt="" />
                        </span>
                    </div>
                    <div className=" py-2  px-6 bg-green text-white rounded-10">15007 REVIEWS</div>
                </div>
            </div>
            {/* reviews */}
            <div className="py-10">

                <div id="default-carousel" className="relative w-full phone:hidden tablet:hidden desktop:block" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-80">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    </div>
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                <div id="default-carousel" className="relative w-full phone:hidden tablet:block desktop:hidden" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-80">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    </div>
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
                <div id="default-carousel" className="relative w-full phone:block tablet:hidden desktop:hidden" data-carousel="slide">
                    <div className="relative overflow-hidden rounded-lg h-80">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="absolute px-10 flex  justify-between space-x-2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full" >
                                <div className="text-center bg-white shadow-xl rounded-10 p-4 m-4">
                                    <p className="text-center text-blue-2 text-xl">Linda</p>
                                    <div className="flex justify-center pt-3">
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                        <img src="assets/img/icon/5/star.svg" className="bg-green p-1 mx-1" alt="" />
                                    </div>
                                    <p className="font-bold mx-1 pt-2">Very nice</p>
                                    <p>No waste time for the preparation of the papers. Some clicks, signatures and wait for your refund. Some clicks, signatures and wait for your refund.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 2" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 3" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 4" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 5" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 6" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 7" data-carousel-slide-to="0"></button>
                    </div>
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>
            </div>
            {/* review */}
            <div className="bg-blue-1 bg-opacity-5 py-10 px-5">
                <h3 className="text-center font-bold text-blue-2 text-3xl">Latest news</h3>
                <p className="text-center font-bold text-grey-2 text-2xl">Check out our latest News & Media</p>
                <div className="flex desktop:flex-row phone:flex-col tablet:flex-row justify-center gap-5 py-5">
                    <div className="relative bg-white mx-1 rounded-10 shadow-lg">
                        <img src="assets/img/icon/6/1.png" alt="" />
                        <p className="text-ml font-bold py-1 px-3">How to Buy Plane Tickets Online Cheaper</p>
                        <span className="px-3">15.11.2019</span>
                        <div className="absolute top-3 left-5 px-10 py-3 bg-grey-2 opacity-3 text-white  rounded-10">Travel</div>
                    </div>
                    <div className="relative bg-white mx-1 rounded-10 shadow-lg">
                        <img src="assets/img/icon/6/2.png" alt="" />
                        <p className="text-ml font-bold py-1 px-3">How to Buy Plane Tickets Online Cheaper</p>
                        <span className="px-3">15.11.2019</span>
                        <div className="absolute top-3 left-5 px-10 py-3 bg-grey-2 opacity-3 text-white  rounded-10">Travel</div>
                    </div>
                </div>
                <div className="flex  desktop:flex-row phone:flex-col tablet:flex-row justify-center gap-5 py-5 pb-2">
                    <div className="relative bg-white mx-1 rounded-10 shadow-lg">
                        <img src="assets/img/icon/6/3.png" alt="" />
                        <p className="text-ml font-bold py-1 px-3">How to Buy Plane Tickets Online Cheaper</p>
                        <span className="px-3">15.11.2019</span>
                        <div className="absolute top-3 left-5 px-10 py-3 bg-grey-2 opacity-3 text-white  rounded-10">Travel</div>
                    </div>
                    <div className="relative bg-white mx-1 pb-2 rounded-10 shadow-lg">
                        <img src="assets/img/icon/6/1.png" alt="" />
                        <p className="text-ml font-bold py-1 px-3">How to Buy Plane Tickets Online Cheaper</p>
                        <span className="px-3">15.11.2019</span>
                        <div className="absolute top-3 left-5 px-10 py-3 bg-grey-2 opacity-3 text-white  rounded-10">Travel</div>
                    </div>
                </div>
            </div>
            {/* news */}
            <div className="relative text-center bg-blue-2 bg-opacity-10 ">
                <img src="assets/img/icon/7/back2.png" className="absolute right-0 -z-10" alt="" />
                <div className="desktop:py-36 desktop:px-44 tablet:py-32 tablet:px-16 phone:py-16 phone:px-8">
                    <h3 className="text-grey-1 text-4xl font-bold pb-8">Stop Delay Effiliate Programm</h3>
                    <p>Share your link with your friends so that they will also enjoy a <br /> refund for cancellation of flights and you will also earn <br /> extra money for every member registered through you</p>
                    <div onClick={scrolltop}>
                        <Button name="Register to affiliate program" className="px-16 py-4 mt-16 mx-4 rounded-10 bg-red text-white"></Button>
                    </div>
                </div>
            </div>
            {/* set status */}
            <div className="text-center">
                <div className="desktop:py-36 desktop:px-44 tablet:py-32 tablet:px-16 phone:py-16 phone:px-8">
                    <h3 className="text-blue-1 text-4xl font-bold pb-8">Stop Delay Effiliate Programm</h3>
                    <p>Turn your delayed, cancelled or overbooked flight into a compensation up to $ 700! </p>
                    <div onClick={scrolltop}>
                        <Button name="claim now" className="bg-red text-white font-semibold px-16 py-3 mt-10 text-xl" />
                    </div>

                </div>
            </div>
        </>
    );
}
