import { Link, Navigate } from "react-router-dom";
import { DropButton } from "../components/atoms/DropButton";
import { AuthState } from "../store/auth";
import { useAppSelector } from "../store/hooks";

export const Footer = () => {
     // change language
     const changelanguage = (lang : string) => {
        console.log(lang);
    }
    
    const { isLogin, user } = useAppSelector<AuthState>(state => state.auth);
    return (
        <div className="">
        {    !isLogin?
            <div className="bg-blue-1 bg-opacity-25"> 
                <div className="flex justify-between items-center desktop:px-60 tablet:px-5 phone:px-5 flex-wrap">
                    <div className="text-center relative">
                        <div className="py-10">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <img src="assets/img/footer/logoEnd.svg" className="will-change-auto" alt="" />
                                </div>
                                <div className="pt-10 flex relative">
                                    <img src="assets/img/footer/world.svg" alt="" />
                                    <DropButton 
                                    className="mt-3 ml-4 cursor-pointer w-60" 
                                    text={'ENG'}
                                    list={[
                                    {title : "English" , onClick : () => changelanguage('English') },
                                    {title : 'Israel' , onClick : () => changelanguage('Israel') },
                                    {title : 'Russian' , onClick : () => changelanguage('Russian') }]}
                                    />
                                    <img src="assets/img/footer/arrow.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left">
                        <h3 className="font-bold">Know your rights</h3>
                        <p>Air passengers rights</p>
                        <p>Delayed flight compensation</p>
                        <p>Cancelled flight compensation</p>
                        <p>Overbooked flight compensation</p>
                        <p>Flight compensation</p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <span className="font-bold">About us</span>
                        <span>About Stopdelay</span>
                        <span>Careers</span>
                        <span>News</span>
                    </div>
                    <div className="flex flex-col justify-between">
                        <span className="font-bold">Contact us</span>
                        <span>Support</span>
                        <span>Media contacts</span>
                        <span>Start your claim</span>
                    </div>
                    
                </div>
                <hr />
                <div className="desktop:px-60 tablet:px-5 phone:px-5 py-6 flex justify-between pt-32">
                    <span>&copy; 2023 stop delay</span>
                    <img src="assets/img/footer/lb.svg" alt="" />
                    <div className="flex justify-between absolute desktop:bottom-56 tablet:bottom-48 phone:bottom-36  right-5  items-center space-x-2">
                            <Link to={'#'}><img src="assets/img/footer/b1.svg" alt="" className="px-2 border-2 p-1 rounded-full" /></Link>
                            <Link to={'#'}><img src="assets/img/footer/b2.svg" alt="" className="px-2 border-2 p-1 rounded-full" /></Link>
                            <Link to={'#'}><img src="assets/img/footer/b3.svg" alt="" className="px-2 border-2 p-1 rounded-full" /></Link>
                            <Link to={'#'}><img src="assets/img/footer/b4.svg" alt="" className="px-2 border-2 p-1 rounded-full" /></Link>
                    </div>
                </div>
            </div>
            :
            <div className="flex justify-center bg-grey-3 h-24 bg-opacity-50 border-t-grey-1 border-t-2 border-opacity-50">
                <div className="flex justify-between w-4/5">
                    <div className="pt-10 flex">
                        <div>
                        <img src="assets/img/footer/world.svg" alt="" className="inline" />

                        </div>
                        <DropButton className="cursor-pointer text-white font-bold"
                            text={'ENG'}
                            list={[
                                {title : "English" , onClick : () => changelanguage('English') },
                                {title : 'Israel' , onClick : () => changelanguage('Israel') },
                                {title : 'Russian' , onClick : () => changelanguage('Russian') }]}
                        />
                        <div>
                        <img src="assets/img/footer/arrow.svg" alt="" className="inline" />

                        </div>
                    </div>
                    <div className="pt-10 flex">
                        <span>&copy; 2020 stop delay</span>
                        <div className="flex justify-between items-center">
                            <img src="assets/img/footer/b1.svg" alt="" className="px-2 border-2 p-1 rounded-cir" />
                            <img src="assets/img/footer/b2.svg" alt=""  className="px-4"/>
                            <img src="assets/img/footer/b3.svg" alt=""  className="px-4"/>
                            <img src="assets/img/footer/b4.svg" alt=""  className="px-4"/>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

