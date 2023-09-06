import { createSlice } from '@reduxjs/toolkit'
import { IUserData } from '../../interfaces/auth';

export interface AuthState {
    token: string;
    user: IUserData,
    isLogin: boolean;

};
const defaultState: AuthState = {
    token: "",
    user: {
        name: "",
        email: "",
        password: ""
    },
    isLogin: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: defaultState,
    reducers: {
        registerNewUser: (state: AuthState, action) => {
            state.isLogin = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        loginUser: (state: AuthState, action) => {
            state.isLogin = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logoutUser: (state: AuthState) => {
            state.isLogin = false;
            state.user = defaultState.user;
            state.token = "";
        }

    }
})

export const { registerNewUser, loginUser, logoutUser } = authSlice.actions
export const authReducer = authSlice.reducer