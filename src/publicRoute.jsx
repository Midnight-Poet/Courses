import { Outlet, useNavigate } from "react-router";
import Cookies from "js-cookie";
import { useEffect } from "react";


export let PublicRoute = () => {
    let data = Cookies.get('token')
    let navigate = useNavigate()

    if (data) {
        useEffect(() => {
            navigate('/dashboard')
        })
    }
    return (
        <Outlet />
    )
}