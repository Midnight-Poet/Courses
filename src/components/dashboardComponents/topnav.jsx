import {
	PiDotsThreeOutlineVerticalLight,
	PiMagnifyingGlassLight,
} from 'react-icons/pi';
import {
	CiShoppingCart,
	CiStar,
	CiMedal,
	CiCircleCheck,
} from 'react-icons/ci';
import { BsBell } from 'react-icons/bs';
import profile from '../../assets/profile/Profile.png';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IoSettingsOutline } from 'react-icons/io5';
import { notificationArray } from '../../arrays/dashboardArray/notification';
import { FiMenu } from 'react-icons/fi';
import { sidebar } from '../../protectedRoute';
import { useEffect } from 'react';
import { Dropdown } from './dropdown';

export let Topnav = (param) => {
	let navFunction = () => {
		let length = window.innerWidth;
		Window.onresize = () => {
			length = window.innerWidth;
		};
		if (length < 950) {
			sidebar.current.className =
				sidebar.current.className.replace(
					'hidden',
					'flex'
				);
			sidebar.current.focus();
		}
	};

	return (
		<div className='bg-white flex justify-between items-center py-4 px-3 rounded-2xl dark:bg-dark-black-900'>
			<FiMenu
				className='md:hidden block w-[8%] text-2xl'
				onClick={navFunction}
			/>
			{/* <SidebarTrigger /> */}
			<div className='text w-[72%]'>
				<h2 className='truncate'>{param.header}</h2>
				<p className='text-sm md:text-base w-full h-max truncate text-dark-black-400 overflow-clip'>
					{param.text ? param.text : null}
				</p>
			</div>
			<div className='w-[15%]'>
				<div className='icons justify-between items-center w-full hidden sm:flex'>
					<PiMagnifyingGlassLight className='cursor-pointer text-2xl' />
					<CiShoppingCart className='cursor-pointer text-2xl' />
					<DropdownMenu>
						<DropdownMenuTrigger>
							<BsBell className='cursor-pointer text-2xl' />
							{/* <div ref={background} className='hidden'></div> */}
						</DropdownMenuTrigger>
						<Dropdown />
					</DropdownMenu>
					<img
						src={profile}
						className='w-1/3 rounded-full'
					/>
				</div>
				<div className='w-[100%] flex sm:hidden rounded-full'>
					<DropdownMenu>
						<DropdownMenuTrigger>
							<img
								src={profile}
								className='w-full rounded-full'
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='absolute min-w-[10rem] left-[-8.5rem] top-2'>
							<DropdownMenuItem className='cursor-pointer outine-none rounded-[5px] transition duration-500 hover:bg-dark-black-700 py-2 px-1 text-base flex capitalize items-center gap-2'>
								<PiMagnifyingGlassLight className='text-2xl' />
								search
							</DropdownMenuItem>
							<DropdownMenuItem className='cursor-pointer rounded-[5px] transition duration-500 hover:bg-dark-black-700 py-2 px-1 text-base flex capitalize items-center gap-2'>
								<CiShoppingCart className='cursor-pointer text-2xl' />
								basket
							</DropdownMenuItem>
							<DropdownMenuItem>
								<DropdownMenu>
									<DropdownMenuTrigger className='cursor-pointer w-full active:bg-dark-black-700 rounded-[5px] hover:bg-dark-black-700 py-2 px-1 text-base flex capitalize items-center gap-2'>
										<BsBell className='cursor-pointer text-2xl' />
										notification
									</DropdownMenuTrigger>
									<Dropdown />
								</DropdownMenu>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};
