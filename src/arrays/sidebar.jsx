import { CiMoneyCheck1, CiGlobe, CiCircleInfo } from "react-icons/ci";
import { IoCalendarOutline, IoSettingsOutline } from "react-icons/io5";
import { BsChatLeftDots, BsFillGridFill } from "react-icons/bs";
// import { FaRegMoneyBillAlt } from "react-icons/fa6";
import { LuBookOpenText } from "react-icons/lu";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { GoCalendar } from "react-icons/go";

export let SidebarItems = [
    [   
        {
            icon: BsFillGridFill,
            text: "dashboard",
            
        },
        {
            icon: GoCalendar,
            text: "schedule",
        },
        {
            icon: BsChatLeftDots,
            text: "message",
        },
        {
            icon: LiaMoneyCheckAltSolid,
            text: "payment",
        },
    ],
    [    
        {
            icon: LuBookOpenText,
            text: "my courses",
        },
        {
            icon: CiGlobe,
            text: "discover",
        },
    ],
    [   
        {
            icon: CiCircleInfo,
            text: "support",
        },
        {
            icon: IoSettingsOutline,
            text: "settings",
        },
    ]
];
