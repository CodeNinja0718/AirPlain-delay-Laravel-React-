import React, {useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { Button } from "../components/atoms/Button";
import { DropButton } from "../components/atoms/DropButton";
import { authApi } from "../services/authApi";
import { AuthState, logoutUser } from "../store/auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import MyModal from "./MyModal";
export const Navbar = () => {
    const navigate = useNavigate();
    const { isLogin, user } = useAppSelector<AuthState>(state => state.auth);
    useEffect(() => {

    }, [])
    const dispatch = useAppDispatch();
    const logout = () => {
        dispatch(logoutUser());
        window.location.href = "../";
    }
    const goMyroom = () => {
        navigate('/my-claims');
    }
    const addNewroom = () => {
        navigate('/booking/steps/1');
    }
    const goPayout = () => {
        navigate('/payout');
    }
    const editProfile = () => {

    }
    // change language
    const changelanguage = (lang : string) => {
        navigate('/editprofile');
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
     };
    return (
        <div className='bg-blue-2 bg-opacity-10 flex flex-row tablet:flex-row  justify-between phone:justify-between  items-center  shadow-md z-50 w-full absolute top-0 phone:p-5 desktop:px-60'>
            <Link to={'../'} >
                <img className="phone:w-36  tablet:w-3/4 align-middle" src={`assets/img/nav/logo-${! isLogin?'white':'black'}.png`}/>
            </Link>

            <div className="phone:hidden tablet:block">
                {isLogin?
                <div className = "phone:pl-0  text-blue-2  text-lg  font-semibold">
                    <Link to={'/'} className="px-2 ">Add new claim</Link>
                    <Link to={'/my-claims'} className="px-2">My claim</Link>
                    <Link to={'/payout'} className="px-2">Payout</Link>
                    <Link to={'/editprofile'} className="px-2">Edit profile</Link>
                </div>
                :
                <div className = " text-xl text-blue-400 space-x-5 ">
                    <Link to={'/'} className=" hover:text-white">About Us</Link>
                    <Link to={'/'} className=" hover:text-white">Contact Us</Link>
                </div>
                }
            </div>
                <div className="flex justify-center items-center space-x-2 tablet:space-x-10 mr-10">
                    <DropButton className="cursor-pointer text-white font-bold"
                    text={'ENG'}
                    list={[
                        {title : "English" , onClick : () => changelanguage('English') },
                        {title : 'Israel' , onClick : () => changelanguage('Israel') },
                        {title : 'Russian' , onClick : () => changelanguage('Russian') }]}
                    />
                    {
                    !isLogin?
                    <div className="text-white flex justify-end items-center tablet:space-x-4 phone:space-x-4">
                        <Link to={'auth/login'} className="phone:p-2 tablet:px-6 tablet:py-4 border rounded-10 flex">
                            <div className="flex relative">
                                <span className="phone:pr-4 tablet:pr-10 phone:text-xl phone:font-norma tablet:text-2xl phone:hidden tablet:block">
                                    Login
                                </span>
                                <img src={`assets/img/icon/login.svg`} className="phone:w-5 phone:h-6 tablet:w-10 tablet:h-8" alt=""  />
                            </div>
                        </Link>
                    </div>
                    :
                    <div className="flex justify-end text-blue-1 font-semibold item-center">
                        <div className="rounded-full bg-blue-2 bg-opacity-40 w-11 text-xs h-11 pl-4 pt-4 text-blue-2">YD</div>
                        <DropButton
                            className="mt-3 ml-4 cursor-pointer desktop:w-60 tablet:w-10 phone:w-5 overflow-x-auto"
                            text={user.email}
                            list={[
                                {title:"Add new claim", onClick: addNewroom},
                                {title:"My claim", onClick: goMyroom},
                                {title:"Payout", onClick: goPayout},
                                {title:"Edit Profile", onClick: editProfile},
                                {title:"logout", onClick:logout},
                            ]}
                        />
                    </div>
                    }
                    <MyModal/>
                </div>
        </div>
    )
}

