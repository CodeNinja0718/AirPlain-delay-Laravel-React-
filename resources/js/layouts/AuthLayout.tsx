import { Outlet } from "react-router-dom"

export const AuthLayout = () => {
    return (
        <div className="flex justify-center">
            <div className="grid justify-items-stretch w-200 h-300 bg-grey-3 ">
                <Outlet />
            </div>
        </div>
    )
}