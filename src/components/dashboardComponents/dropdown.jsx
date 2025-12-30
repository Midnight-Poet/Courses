import { IoSettingsOutline } from "react-icons/io5";
import { notificationArray } from "../../arrays/dashboardArray/notification";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { CiStar, CiCircleCheck } from "react-icons/ci";
import { LiaMedalSolid } from "react-icons/lia";
import {
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"

export let Dropdown = () => {
    return (
        <DropdownMenuContent className='w-[22rem] h-[50vh] sm:h-max sm:w-[25rem] left-[-18rem] top-1 sm:left-[-24rem] sm:top-[15px] absolute rounded-3xl p-4 z-91 overflow-auto' >
            <DropdownMenuLabel>
                <div className='flex justify-between items-center capitalize text-2lg w-full'>
                    <p>notification</p>
                    <IoSettingsOutline />
                </div>
            </DropdownMenuLabel>
            {
                notificationArray.map(items => {
                    
                    return (
                        <DropdownMenuItem className='flex items-start justify-between gap-4 mt-1 p-1 hover:bg-none hover:outline-none'>
                            <div className='p-1.5 rounded-full bg-primary-50 text-primary-500 dark:bg-dark-black-700 dark:text-primary-50 text-3xl flex items-center justify-center'>
                                {
                                    items.type == 'completion' ? <LiaMedalSolid /> :
                                        items.type == 'thoughts' ? <CiStar /> :
                                            <CiCircleCheck />

                                }
                            </div>
                            <div>
                                <p className='text-sm font-light text-dark-black-800 dark:text-white'>
                                    {items.message}
                                </p>
                                <span className='text-xs text-dark-black-400 dark:text-dark-black-500'>{items.time}</span>
                            </div>
                            <div className='text-2xl'>
                                <PiDotsThreeOutlineVerticalLight />
                            </div>
                        </DropdownMenuItem>
                    )
                })
            }

        </DropdownMenuContent>
    )
}