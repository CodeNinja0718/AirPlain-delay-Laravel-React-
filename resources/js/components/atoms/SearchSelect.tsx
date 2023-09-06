import { ReactElement, useState, useEffect, useRef } from "react";
import { useAppSelector } from "../../store/hooks";
import { CmsHomeState } from "../../store/cms/home";
import { IAirportdata } from "../../interfaces/cms/airportdata";

interface ISearchSelect extends Partial<HTMLDivElement> {
    img: 'arrive'|'start'|'city';
    searchResult: (item:IAirportdata)=>any;
    closed?: boolean;
    defaultValue ?: IAirportdata;
}
const imgData = {
    'start' : <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5885 14.6477H0.650391V15.4711H19.5885V14.6477Z" fill="#0070E0"/>
    <path d="M19.3016 1.67646C17.9262 0.87484 16.3634 1.30066 15.2947 1.79898L12.1091 3.28446L6.63023 0.528809L3.3674 0.668992L7.89167 5.25563L5.00834 6.6253L2.00851 5.48362L0 6.42015L1.81513 8.67415C1.62337 8.90293 1.44959 9.22505 1.60735 9.56338C1.81341 10.0052 2.42243 10.2279 3.42141 10.2279C3.62628 10.2279 3.84756 10.2185 4.08507 10.1997C5.18167 10.1131 6.37057 9.83321 7.11397 9.48656L18.5014 4.17653C19.4849 3.71786 19.9748 3.23625 19.9991 2.70409C20.0117 2.42809 19.9009 2.02566 19.3016 1.67646ZM18.1533 3.43024L6.76596 8.74031C6.13261 9.03567 5.09278 9.28314 4.1169 9.37075C3.11943 9.46029 2.58612 9.34786 2.40835 9.25238C2.44495 9.20228 2.51329 9.12356 2.63939 9.01257L2.93516 8.75225L1.30039 6.72226L2.04087 6.37693L5.04392 7.51992L9.29136 5.50223L5.25672 1.41194L6.45151 1.3606L12.0954 4.19921L15.6426 2.54518C16.9381 1.94109 18.0296 1.88823 18.8869 2.38779L18.887 2.38783C19.103 2.51368 19.1785 2.62348 19.1765 2.66655C19.1764 2.66951 19.1517 2.96478 18.1533 3.43024Z" fill="#0070E0"/>
    </svg>,
    'arrive' : <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4966 12.5148C17.2335 10.9865 15.9377 10.0872 14.897 9.60189L11.8002 8.15784L10.428 2.35284L8.275 0L7.6856 6.24365L4.87011 4.95511L3.84509 2.00572L1.88376 1.09117L1.3387 3.85542C1.04776 3.85623 0.699552 3.92936 0.545674 4.25941C0.303223 4.77946 0.665218 5.5364 1.62173 6.50925C2.37235 7.27264 3.32492 7.98398 4.04859 8.32145L15.1262 13.4871C15.6868 13.7484 16.1476 13.8788 16.5164 13.8788C16.7781 13.8788 16.9935 13.8131 17.165 13.682C17.3797 13.5179 17.6115 13.1822 17.4966 12.5148ZM16.6728 13.0378C16.6706 13.0394 16.4373 13.2038 15.4689 12.7523L4.39124 7.58664C3.77703 7.30024 2.94436 6.68189 2.26995 6.01133C1.58435 5.32963 1.33213 4.86313 1.2888 4.66847C1.34924 4.66502 1.44892 4.66729 1.60523 4.69105L1.98879 4.74934L2.47904 2.26325L3.19188 2.59566L4.21799 5.54828L8.38563 7.45558L8.9105 1.89538L9.68755 2.74459L11.1016 8.72657L14.5544 10.3367C15.8132 10.9236 16.5342 11.7027 16.6977 12.6523V12.6524C16.7385 12.8899 16.7052 13.013 16.6728 13.0378Z" fill="#0070E0"/>
    <path d="M5.68485 12.0454C5.71947 12.0484 5.75396 12.0499 5.7883 12.0499C6.06123 12.0499 6.32302 11.9549 6.53462 11.7774C6.77282 11.5775 6.91891 11.2969 6.94603 10.9871C6.97311 10.6773 6.87797 10.3755 6.67812 10.1373C6.26554 9.64553 5.5298 9.58116 5.038 9.99378V9.99383C4.79981 10.1937 4.65371 10.4744 4.62659 10.7841C4.59952 11.0939 4.69466 11.3957 4.89454 11.6339C5.09443 11.8722 5.37511 12.0183 5.68485 12.0454ZM5.43425 10.8548C5.44248 10.7608 5.48683 10.6756 5.55914 10.6149C5.70844 10.4897 5.9318 10.5092 6.05706 10.6585C6.11774 10.7308 6.14665 10.8224 6.13842 10.9164C6.13019 11.0105 6.08584 11.0957 6.01352 11.1564C5.9412 11.217 5.84963 11.2458 5.75555 11.2377C5.6615 11.2295 5.57629 11.1851 5.51561 11.1128C5.45492 11.0405 5.42602 10.9489 5.43425 10.8548Z" fill="#0070E0"/>
    <path d="M8.31068 13.226C8.57481 13.226 8.84033 13.1368 9.05809 12.9541C9.5498 12.5415 9.61413 11.8057 9.20151 11.314C8.78897 10.8223 8.05323 10.7579 7.56148 11.1705C7.32324 11.3704 7.17715 11.6511 7.15003 11.9609C7.12295 12.2707 7.21809 12.5724 7.41798 12.8106C7.64786 13.0846 7.97815 13.226 8.31068 13.226ZM7.95764 12.0315C7.96587 11.9375 8.01026 11.8523 8.08258 11.7916C8.15485 11.7309 8.24659 11.7021 8.34051 11.7103C8.43456 11.7185 8.51976 11.7628 8.58045 11.8352C8.64113 11.9075 8.67003 11.9991 8.6618 12.0931C8.65357 12.1871 8.60919 12.2724 8.53691 12.333C8.38761 12.4583 8.16422 12.4387 8.039 12.2894C7.97832 12.2172 7.94945 12.1256 7.95764 12.0315Z" fill="#0070E0"/>
    <path d="M14.0777 15.9152C14.3418 15.9152 14.6074 15.826 14.8251 15.6433C15.0633 15.4434 15.2093 15.1628 15.2364 14.853C15.2635 14.5432 15.1683 14.2415 14.9685 14.0033C14.5559 13.5115 13.8202 13.4471 13.3284 13.8598C12.8367 14.2724 12.7723 15.0081 13.1849 15.4999C13.4149 15.7739 13.7452 15.9152 14.0777 15.9152ZM13.8496 14.4808C13.9218 14.4201 14.0135 14.3912 14.1075 14.3995C14.2015 14.4077 14.2867 14.4521 14.3474 14.5244C14.4081 14.5967 14.437 14.6883 14.4288 14.7824C14.4206 14.8764 14.3762 14.9616 14.3039 15.0223C14.1546 15.1474 13.9313 15.1279 13.806 14.9787C13.6807 14.8294 13.7003 14.6061 13.8496 14.4808Z" fill="#0070E0"/>
    <path d="M17.1219 19.1892H0.877441V19.9999H17.1219V19.1892Z" fill="#0070E0"/>
    </svg>,
    'city' : <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.06554 4.83179C6.65604 4.83179 5.50879 5.97904 5.50879 7.38854C5.50879 8.79804 6.65604 9.94529 8.06554 9.94529C9.47504 9.94529 10.6223 8.79804 10.6223 7.38854C10.6223 5.97904 9.47504 4.83179 8.06554 4.83179ZM8.06554 9.21479C7.05855 9.21479 6.23929 8.39553 6.23929 7.38854C6.23929 6.38154 7.05855 5.56229 8.06554 5.56229C9.07253 5.56229 9.89179 6.38154 9.89179 7.38854C9.89179 8.39553 9.07253 9.21479 8.06554 9.21479Z" fill="#222222"/>
    <path d="M12.9534 2.50034C11.6305 1.1774 9.87147 0.44873 8.00066 0.44873C6.12948 0.44873 4.3708 1.1774 3.04787 2.50034C0.599596 4.94825 0.295342 9.55405 2.38896 12.3446L8.00066 20.4487L13.604 12.3559C15.706 9.55405 15.4017 4.94825 12.9534 2.50034ZM13.0115 11.9289L8.00066 19.1652L2.98176 11.9176C1.08282 9.38567 1.35493 5.2262 3.5647 3.0168C4.74957 1.83193 6.32489 1.17923 8.00066 1.17923C9.67643 1.17923 11.2518 1.83193 12.437 3.0168C14.6467 5.2262 14.9189 9.38567 13.0115 11.9289Z" fill="#222222"/>
    </svg>
}
export const SearchSelect: (props: ISearchSelect)=> ReactElement = ({img, searchResult , ...rest}) => {
    const [visible, setVisible] = useState(false);
    const {airportinfo} = useAppSelector<CmsHomeState>(state=>state.cmsHome)
    const [airData, setAirData] = useState<Array<IAirportdata>>([]);
    const [inputValue, setInputVale] = useState("");
    const [selIndex, setSelIndex] = useState<number>(-1);
    const targetRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        if(rest.defaultValue)
            setInputVale(img=='city'?(rest.defaultValue.name+' ('+rest.defaultValue.iata+') '+ rest.defaultValue.city):(rest.defaultValue.name+' ('+rest.defaultValue.iata+')'));
    },[rest.defaultValue])
    const searchHandle = async(e: React.ChangeEvent<HTMLInputElement>) => {

        setInputVale(e.target.value);

        let ad1 = await airportinfo.filter(item => item.iata.toLowerCase().indexOf(e.target.value.toLowerCase())>-1)
        if(ad1.length==0)
            ad1 = await airportinfo.filter(item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1)
        if(ad1.length==0 && img == 'city')
            ad1 = await airportinfo.filter(item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1)
        setAirData(ad1)
        // await setAirData([...airData, ...airportinfo.filter(item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase())>-1)]);
        // if (airData.length==0){
        //     console.log(e.target.value)
        //     await setAirData(airportinfo.filter(item => item.name.toLowerCase().indexOf(e.target.value.toLowerCase())>0));
        // }
        // await setAirData([...airData, ...airportinfo.filter(item => item.city.toLowerCase().indexOf(e.target.value.toLowerCase())>0)]);
        setVisible(true);
    }
    const selectHandle = (item:IAirportdata) => {
        searchResult(item);
        setInputVale(img=='city'?`${item.name} (${item.iata}) ${item.city}`:`${item.name} (${item.iata})`);
        setVisible(false)
    }

    const selectItem = (val:number) => {
        setSelIndex(val);
    }
    const deleteData = () => {
        setInputVale('');
        setSelIndex(0);
        setVisible(false)
    }
    const handleKeyDown = (event:React.KeyboardEvent<HTMLDivElement>) => {
        switch (event.key) {
            case 'ArrowDown':
                setSelIndex(selIndex+1)
                // if (targetRef.current) {
                //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
                // }
                break;
            case 'ArrowUp':
                setSelIndex(selIndex-1)
                // if (targetRef.current) {
                //     targetRef.current.scrollIntoView({ behavior: 'smooth' });
                // }
                break;
            case 'Enter':
                    selectHandle(airData[selIndex]);
                    break;
            default:
                break;
        }
    }
    return (
        <div className={`flex flex-col content-center ${rest.className??''}`} onKeyDown={handleKeyDown}>
            <div className="flex flex-row gap-4 w-full border-1 border-grey-3 py-2 px-1 rounded-10">
                <div className="w-1/12 grid justify-items-center content-center mt-1">{imgData[img]}</div>
                <input className="focus:outline-none w-11/12 focus:w-full"
                placeholder={img=='city'?'Enter the city or airport name':'Enter airport name'} value={inputValue} onChange={searchHandle}/>
                {inputValue && <svg className="h-5 w-5 text-red-600" onClick={deleteData} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>}
            </div>

            {
                visible &&
                <div className="bg-white w-11/12 flex flex-col overflow-y-scroll max-h-20 ml-9" onMouseLeave={deleteData} >
                    {
                        airData.map((item, key) => (
                            <div className={`text-left border-b-1 flex  py-3 px-1 ${key==selIndex?'bg-grey-4':'bg-white'} `}
                            onMouseEnter={()=>selectItem(key)} ref={ key==selIndex ? targetRef: null}
                            onClick={()=>selectHandle(item)}>{img=='city'?`${item.name} (${item.iata}) ${item.city}`:`${item.name} (${item.iata})`}</div>
                        ))
                    }
                </div>
            }
        </div>
    )
}
