import { useEffect } from "react"
import { useNavigate } from "react-router"


export let Navigation = () => {
    let navigate = useNavigate()
    useEffect(() => {
        navigate('/signin')
    })
}