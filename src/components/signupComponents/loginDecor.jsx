import { PiDotsThreeOutline } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import tablet from "../../assets/main.png"
import tabletImg from "../../assets/tablet-img.png"
import { Outlet } from "react-router";

export let LoginDecor = () => {
    let list = [
        {
            sn: '01',
            title: 'Introduction to React JS'
        },
        {
            sn: '02',
            title: 'Introduction to Tailwind CSS'
        },
        {
            sn: '03',
            title: 'Hands-On Project'
        },
        {
            sn: '04',
            title: 'Code Snippets and Templates'
        },
    ]

    return (
        <>
            <section className="bg-primary-500 text-white px-4 py-2 rounded-2xl m-6 w-1/2 hidden md:block">
                <div className=" text-center  m-[50px]">
                    <h1 className="text-[40px] leading-[120%]">
                        Explore a Universe of Knowledge with Us!
                    </h1>
                    <p className="text-base leading-[140%] mt-5 text-dark-black-200 font-normal">
                        The Courses Dashboard is your compass to a 
                        world of knowledge. Find, enroll, and dive into 
                        transformative courses. Let the exploration begin! 🚀
                    </p>
                </div>
                
                <div className="relative flex items-center justify-center ">
                    <div className="absolute bg-yellow-50 text-black w-[35%] z-10 px-3 py-4 rounded-2xl left-7 top-0 shadow-2xl shadow-primary-300">
                        <div className="flex justify-between items-center">
                            <div className="status h-4 w-4 mr-1 bg-yellow-500 rounded-sm"></div>
                            <h5 className="text-base leading-[140%] w-4/5">Live class</h5>
                            <PiDotsThreeOutline className="text-[20px]" />
                        </div>
                        <p className="text-sm my-2">
                            How to Make Money from...
                        </p>
                        <span className="text-sm text-dark-black-500">04:00 PM - 06:00 PM</span>
                    </div>

                    <div className="absolute z-10 bottom-6 right-3 rounded-2xl bg-white text-black capitalize py-3 px-5 w-[44%] shadow-2xl shadow-white">
                        <ul className="capitalize">
                            <h6 className="text-base">modules</h6>
                            {
                                list.map(element => {
                                    return (
                                        <li className="text-dark-black-600 text-xs flex my-2 items-center justify-between w-full"><span className="w-[5%]">{element.sn}</span> <span className="w-[80%]">{element.title}</span> <CiCircleCheck className="self-end"/></li>
                                    )
                                })
                                
                            }
                        </ul>
                    </div>

                    <div className="relative flex items-center justify-center">
                        <img src={tablet} alt="" className="w-[70%]"/>
                        <img src={tabletImg} alt="" className="absolute top-[37.5%] left-[56.6%] translate-x-[-50%] translate-y-[-50%] w-[54%]" />
                    </div>
                </div>

            </section>
        </>
    )

}