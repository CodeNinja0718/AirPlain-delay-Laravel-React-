import { createSlice } from '@reduxjs/toolkit'
import { IHomeHowDoesItAllWork , IAirportdata } from '../../interfaces/cms/airportdata';

export interface CmsHomeState {
    airportinfo : IAirportdata[];
    howDoesItAllWork: IHomeHowDoesItAllWork[];
};

const homedefaultState: CmsHomeState = {
    howDoesItAllWork: [
        {
            imgUrl: "",
            title: "Submit your claim",
            description: "It only takes minutes to finish it! That way you’ll find out your preliminary eligibility – and the size of the compensation."
        },
        {
            imgUrl: "",
            title: "We fight for your rights",
            description: "Our experts will be checking your eligibility in depth, contacting the airlines, working with the authorities and so on."
        },
        {
            imgUrl: "",
            title: "Receive your compensation",
            description: "Once we receive the compensation, we will transfer the money to you, minus our fee. You don’t pay if we don’t win."
        },
    ],
    airportinfo : [
        {
            iata : "GCA",
            city : "Greece",
            name : 'Greece Airport',
            id: 0,
            lat: 0,
            lon: 0
        },
        {
            iata : "LDA",
            city : "London",
            name : 'London Airport',
            id: 0,
            lat: 0,
            lon: 0
        },
    ]

};

export const cmsHomeSlice = createSlice({
    name: 'cms-home',
    initialState: homedefaultState,
    reducers: {
        updateHowDoesItWork: (state: CmsHomeState, action: { payload: IHomeHowDoesItAllWork[] }) => {
            state.howDoesItAllWork = action.payload;
        },
        updateairportinfo : (state : CmsHomeState , action:{payload : IAirportdata[]})=>{
            state.airportinfo = action.payload;
        }
    }
})

export const { updateHowDoesItWork , updateairportinfo } = cmsHomeSlice.actions
export const cmsHomeReducer = cmsHomeSlice.reducer
