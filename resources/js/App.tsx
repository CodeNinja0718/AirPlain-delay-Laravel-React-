import React from "react";
import {  Routes,  Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { NotFound } from "./pages/NotFound";
import { AuthLayout } from "./layouts/AuthLayout";
import { Register } from "./pages/Auth/Register";
import { Provider } from "react-redux";
import { ProgressSteps } from "./pages/Booking/ProgressSteps";
import { MyClaims } from "./pages/MyClaims";
import { Login } from "./pages/Auth/Login";
import { Payout } from "./pages/Payout";
import { Profile} from "./pages/Profile";
import { MyClaim2 } from "./pages/myclaim2";
import { Permissionofclaim } from "./pages/permissionofclaim";
import { Claimend } from "./pages/claimend";
import { Step21 } from "./pages/Booking/Step21";
import { store } from "./store";
// import {} from 'react-router-scroll-top';
export const App = () => {
    return (
      <div className="relative">
        <Provider store={store}>
          <Routes>

            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>

            <Route path="" element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path="booking">
                <Route index element={<Home />} />
                <Route path="steps/:step" element={<ProgressSteps />} />
              </Route>
              <Route path="my-claims" element={<MyClaims/>} />
              <Route path="editprofile" element={<Profile/>} />
              <Route path="payout" element={<Payout  />} />
              <Route path="claim2/:step" element={<  MyClaim2/>} />
              <Route path="permission" element={<Permissionofclaim/>} />
              <Route path="claimend" element={<Claimend/>} />
              <Route path="step21" element={<Step21/>} />
            </Route>

          </Routes>

        </Provider>
      </div>
    )
}