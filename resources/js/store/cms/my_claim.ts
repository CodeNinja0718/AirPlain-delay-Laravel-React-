
import { createSlice } from '@reduxjs/toolkit';
import { Imyclaim } from '../../interfaces/cms/myclaim';

export interface ClaimState {
    claimcontent : Imyclaim[];
};
const defaultState: ClaimState = {
    claimcontent: [
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
    ]
};

export const cmdclaimslice = createSlice({
    name: 'cms-home',
    initialState: defaultState,
    reducers: {
        updateclaim: (state: ClaimState, action: { payload: Imyclaim[] }) => {
            state.claimcontent = action.payload;
        }
    }
})

export const { updateclaim } = cmdclaimslice.actions
export const cmsclaimReducer = cmdclaimslice.reducer