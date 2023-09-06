import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Alert } from "../../components/atoms/Alert"
import { Button } from "../../components/atoms/Button"
import { RadioGroupButton } from "../../components/atoms/RadioGroupButton"
import { RadioGroupInput } from "../../components/atoms/RadioGroupInput"
import { SelectButton } from "../../components/atoms/SelectButton"
import { SelectInput } from "../../components/atoms/SelectInput"
import { TextInput } from "../../components/atoms/TextInput"
import { IAirportdata } from "../../interfaces/cms/airportdata"
import { IStep1 } from "../../interfaces/stopDelay/step1"
import { homeApi } from "../../services/homeApi"
import { CmsHomeState, updateairportinfo } from "../../store/cms/home"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { StopDelayState, updateStep1 } from "../../store/stopDelay"
import { SearchSelect } from "../../components/atoms/SearchSelect"
import { ProgressBar } from "../../components/atoms/ProgressBar"
import { IinitStep } from "../../interfaces/stopDelay/initStep"

export const Step1 = () => {
    const { airportinfo } = useAppSelector<CmsHomeState>(state => state.cmsHome)
    const { step1: initStep1, initStep } = useAppSelector<StopDelayState>(state => state.stopDelay)
    const dispatch = useAppDispatch();
    const [step1, setStep1] = useState<IStep1>({
        from: "",
        to: "",
        directFlight: 0,
        countOfStops: 0,
        placeOfStops: []
    });

    const [airport, setAirport] = useState<IinitStep>({
        fromAirport: {
            iata : '',
            city : '',
            name : '',
            id: 0,
            lat: 0,
            lon : 0
        },
        toAirport : {
            iata : '',
            city : '',
            name : '',
            id: 0,
            lat: 0,
            lon : 0
        }
    });
    useEffect(() => {
        setAirport(initStep)
        setStep1(initStep1);
        setStep1({
            ...step1,
            from: initStep.fromAirport.id.toString(),
            to: initStep.toAirport.id.toString(),
            placeOfStops: [],
        })
    }, []);
    const saveStep1 = () => {
        dispatch(updateStep1(step1));
    }
    const [placeData, setPlaceData] = useState<Array<JSX.Element>>([]);
    const changeRadioHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStep1({
            ...step1,
            [e.target.name]: e.target.value
        })
    }
    const searchResult1 = (item: IAirportdata) => {
        let data = step1.placeOfStops;
        data[0] = item.id;
        setStep1({
            ...step1,
            placeOfStops: data
        });

    }
    const searchResult2 = (item: IAirportdata) => {
        let data = step1.placeOfStops;
        data[1] = item.id;
        setStep1({
            ...step1,
            placeOfStops: data
        });
    }
    const searchResult3 = (item: IAirportdata) => {
        let data = step1.placeOfStops;
        data[2] = item.id;
        setStep1({
            ...step1,
            placeOfStops: data
        });
    }
    const searchResult4 = (item: IAirportdata) => {
        let data = step1.placeOfStops;
        data[3] = item.id;
        setStep1({
            ...step1,
            placeOfStops: data
        });
    }
    const seletFromAirport = (item: IAirportdata) => {
        setAirport({
            ...airport,
            fromAirport: item,
        })
    }
    const selectToAirport = (item: IAirportdata) => {
        setAirport({
            ...airport,
            toAirport: item,
        })
    }
    return(
        <div className="px-8 desktop:pt-14 pb-11 flex flex-col">
            <div className="bg-white flex flex-col pt-12 pb-11 px-9  rounded-t-10">
                <div className="flex flex-row gap-4 h-20">
                    <ProgressBar percent="6.25" className="w-full h-3 mt-2"/>
                </div>
                <div className="flex desktop:flex-row phone:flex-col desktop:gap-8">
                    <SearchSelect searchResult={seletFromAirport} img="start" closed={true} className="desktop:w-1/2 phone:w-full mt-2" defaultValue={initStep.fromAirport} />
                    <SearchSelect searchResult={selectToAirport} img="arrive" closed={true} className="desktop:w-1/2 phone:w-full mt-2" defaultValue={initStep.toAirport} />
                </div>
                <RadioGroupButton className="desktop:w-1/2 desktop:pr-4 mt-5 phone:w-full" radioList={[{ text: <div className="w-1/2">Yes</div>, value: 1 }, { text: <div className="w-1/2">No</div>, value: 0 }]} name="directFlight"
                    state="row" label="Was it a direct flight?" required={true} onChange={changeRadioHandle} defaultValue={step1.directFlight} />

                {step1.directFlight == 0 &&
                    <RadioGroupButton
                        radioList={[{ text: <>1</>, value: 1 }, { text: <>2</>, value: 2 }, { text: <>3</>, value: 3 }, { text: <>4</>, value: 4 }]}
                        name="countOfStops" state="row" onChange={changeRadioHandle} defaultValue={step1.countOfStops}
                        className="mt-11 desktop:w-1/2 desktop:pr-4 phone:w-full" required={true} label="How many stops did you have? " />}
                <Alert className="mt-5" message="No risk. Submitting a claim is absolutely free of charge." imgurl="/assets/img/i-icon.png" />
                {step1.countOfStops > 0 && <SearchSelect img="city" searchResult={searchResult1} className="desktop:w-1/2 desktop:pr-4 mt-5 phone:w-full" />}
                {step1.countOfStops > 1 && <SearchSelect img="city" searchResult={searchResult2} className="desktop:w-1/2 desktop:pr-4 mt-5 phone:w-full" />}
                {step1.countOfStops > 2 && <SearchSelect img="city" searchResult={searchResult3} className="desktop:w-1/2 desktop:pr-4 mt-5 phone:w-full" />}
                {step1.countOfStops > 3 && <SearchSelect img="city" searchResult={searchResult4} className="desktop:w-1/2 desktop:pr-4 mt-5 phone:w-full" />}

            </div>
            <div className="flex flex-row pl-9 py-11 desktop:bg-blue-3 desktop:bg-opacity-25 gap-8 rounded-b-10">
                <Link to={'/booking/steps/2'}><Button className="bg-red px-16 py-3 text-white" onClick={saveStep1} name="Продовжити"/></Link>

            </div>
        </div>
    )
}
