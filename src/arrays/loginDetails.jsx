import { FaEnvelope } from "react-icons/fa6"
import { CiLock } from "react-icons/ci"
import { HiOutlineUser } from "react-icons/hi"
import { BsEnvelope } from "react-icons/bs";

export let LoginDetails = [
    {
        icons: <BsEnvelope />,
        title: 'Email',
        type: 'email'
    },
    {
        icons: <CiLock />,
        title: 'Password',
        type: 'password'
    },
]

export let SignupDetails = [
    {
        icons: <HiOutlineUser />,
        title: 'Full Name',
        type: 'text'
    },
    {
        icons: <BsEnvelope />,
        title: 'Email',
        type: 'email'
    },
    {
        icons: <CiLock />,
        title: 'Password',
        type: 'password'
    },
    
    {
        icons: <CiLock />,
        title: 'confirm Password',
        type: 'password'
    },
]