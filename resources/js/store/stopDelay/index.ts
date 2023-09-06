import { createSlice } from '@reduxjs/toolkit'
import { time, timeStamp } from 'console';
import { devNull } from 'os';
import { IinitStep } from '../../interfaces/stopDelay/initStep';
import { IStep1 } from '../../interfaces/stopDelay/step1';
import { IStep10 } from '../../interfaces/stopDelay/step10';
import { IStep11 } from '../../interfaces/stopDelay/step11';
import { IStep12 } from '../../interfaces/stopDelay/step12';
import { IStep13 } from '../../interfaces/stopDelay/step13';
import { IStep14 } from '../../interfaces/stopDelay/step14';
import { IStep15 } from '../../interfaces/stopDelay/step15';
import { IStep16 } from '../../interfaces/stopDelay/step16';
import { IStep17 } from '../../interfaces/stopDelay/step17';
import { IStep18 } from '../../interfaces/stopDelay/step18';
import { IStep2 } from '../../interfaces/stopDelay/step2';
import { IStep3 } from '../../interfaces/stopDelay/step3';
import { IStep4 } from '../../interfaces/stopDelay/step4';
import { IStep5 } from '../../interfaces/stopDelay/step5';
import { IStep6 } from '../../interfaces/stopDelay/step6';
import { IStep7 } from '../../interfaces/stopDelay/step7';
import { IStep8 } from '../../interfaces/stopDelay/step8';
import { IStep9 } from '../../interfaces/stopDelay/step9';

export interface StopDelayState {
    initStep: IinitStep,
    step1: IStep1,
    step2: IStep2,
    step3: IStep3,
    step4: IStep4,
    step5: IStep5,
    step6: IStep6,
    step7: IStep7,
    step8: IStep8,
    step9: IStep9,
    // step10: IStep10,
    // step11: IStep11,
    // step12: IStep12,
    // step13 : IStep13,
    // step14 : IStep14,
    // step15: IStep15,
    // step16 : IStep16,
    // step17 : IStep17,
    // step18 : IStep18
};
const defaultState: StopDelayState = {
    initStep : {
        fromAirport: {
            iata : '',
            city : '',
            name : '',
            id: 0
        },
        toAirport : {
            iata : '',
            city : '',
            name : '',
            id: 0
        }
    },
    step1: {
        from: '',
        to: '',
        directFlight: 0,
        countOfStops: 1,
        placeOfStops:[]
    },
    step2: {
        indexOfStops: 0,
        issueOfFlight: 0,
        indexOfDelayingTime: 0,
        volunteerSeat: 0,
    },
    step3:{
        indexOfFlightCancellation : 1,
        indexOfDistruptOfAirline  : 1,
        indexOfReasonOfAirline : 1,
        indexOfServiceFromAirline : []
    },
    step4:{
        airlinesName : [],
        airlinesDate : [],
        airlinesFlightNumber :[]
    },
    step5:{
        compansationEmail : '',
        compansationPhone : '',
        indexOfUseOfWhatapp : false
    },
    step6:{
        addressOfPassenger : "",
        birthdayOfPassenger : new Date(),
        cityOfPassenger : "",
        countryOfPassenger : "",
        firstNameOfPassenger : "",
        lastNameOfPassenger : "",
        passportNumberOfPassenger: ""
    },
    step7:{
        birthdayOfOtherPassenger : [],
        emailOfOtherPassenger:[],
        firstNameOfOtherPassenger:[],
        indexOfWith:0,
        lastNameOfOtherPassenger: [],
        phoneOfOtherPassenger : []
    },
    step8:{
        bookingReference:''
    },
    step9:{
        step9_filename :'',
        step9_filepath : ''
    },
    // step11:{

    // },
    // step12:{
    //     filePathnameOfStep12 :''
    // },
    // step13:{
    //     filePathNameOfStep13:''
    // },
    // step14:{
    //     commentOfRebook :'',
    //     expensiveFilePathName :'',
    //     indexOfPayforDistruption : false,
    //     moneyOfPaymentforDistruption :''
    // },
    // step15:{
    //      dateOfArriveFinalDestination :'',
    //      filePathNameStep15 : '',
    //      indexOfContactAirline : false,
    //      indexOfMissConnection : false,
    //      indexOfPreferedLanguageOfCommunication : 0,
    //      indexOfRebook : false,
    //      indexOfWhereBuyTicket : 0,
    //      orderOfTimeOfArriveFinalDestination : 0,
    //      websiteOfBuyTicket : '',
    // },
    // step16:{

    // },
    // step17:{
    //     indexOfRecommend :false
    // },
    // step18:{
    //     urlOfConnection:'',
    // }
};

export const stopDelaySlice = createSlice({
    name: 'stopDelay',
    initialState: defaultState,
    reducers: {
        setInitStep: (state: StopDelayState, action) => {
            state.initStep = action.payload;
        },
        updateStep1: (state: StopDelayState,action) => {
            state.step1 = action.payload;
        },
        updateStep2: (state: StopDelayState,action) => {
            state.step2 = action.payload;
        },
        updateStep3: (state: StopDelayState,action) => {
            state.step3 = action.payload;
        },
        updateStep4: (state: StopDelayState,action) => {
            state.step4 = action.payload;
        },
        updateStep5: (state: StopDelayState,action) => {
            state.step5 = action.payload;
        },
        updateStep6: (state: StopDelayState,action) => {
            state.step6 = action.payload;
        },
        updateStep7: (state: StopDelayState,action) => {
            state.step7 = action.payload;
        },
        updateStep8: (state: StopDelayState,action) => {
            state.step8 = action.payload;
        },
        updateStep9: (state: StopDelayState,action) => {
            state.step9 = action.payload;
        },
    }
})

export const { setInitStep, updateStep1,updateStep2, updateStep3,
updateStep4, updateStep5,updateStep6, updateStep7, updateStep8 ,updateStep9} = stopDelaySlice.actions
export const stopDelayReducer = stopDelaySlice.reducer
