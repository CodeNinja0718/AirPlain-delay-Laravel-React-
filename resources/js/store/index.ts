import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { AuthState, authReducer, authSlice } from './auth';
import { CmsHomeState, cmsHomeReducer, cmsHomeSlice } from './cms/home';
import { ClaimState, cmsclaimReducer, cmdclaimslice } from './cms/my_claim';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
import { stopDelayReducer, StopDelayState } from './stopDelay';

const persistConfig = {
    key: 'airplain-booking',
    storage,
    stateReconciler: autoMergeLevel1,
    // blacklist: ['cmsHome', 'cmsclaim', 'stopDelay']
};
export interface GlobalState {
    auth: AuthState;
    cmsHome: CmsHomeState;
    cmsclaim: ClaimState
    stopDelay: StopDelayState;
}

const reducers = combineReducers({
    auth: authReducer,
    cmsHome: cmsHomeReducer,
    cmsclaim : cmsclaimReducer,
    stopDelay: stopDelayReducer,
});
const persistedReducer = persistReducer<GlobalState>(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch