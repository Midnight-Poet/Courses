import { Link, Outlet, useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { createRef, useEffect, useRef, useState } from 'react';
import { GiWhiteBook } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa6';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { SidebarItems } from './arrays/sidebar';
import { Sidenav } from './components/dashboardComponents/sidenav';

export let sidebar = createRef();
export let ProtectedRoute = () => {
	let data = Cookies.get('token');
	let navigate = useNavigate();
	// let [length, setLength] = useState()

	if (!data) {
		useEffect(() => {
			navigate('/signIn');
		});
	}

	useEffect(() => {
		let length;
		window.addEventListener('resize', () => {
			length = window.innerWidth;
			if (length > 950) {
				sidebar.current.className = sidebar.current.className.replace(
					'hidden',
					'flex'
				);
			} else {
				sidebar.current.className = sidebar.current.className.replace(
					'flex',
					'hidden'
				);
			}
		});
	});
	let navCollapse = () => {
		if (window.innerWidth < 950) {
			setTimeout(() => {
				sidebar.current.className = sidebar.current.className.replace(
					'flex',
					'hidden'
				);
			}, 500);
		}
	};
	// console.log(sid)

	// Nothing Uncovered epi 4
	return (
		<main className='bg-dark-black-50 dark:bg-black'>
			{/* <Sidenav /> */}
			<SidebarProvider className=''>
				<Sidebar
					className={`bg-white pt-7 px-2 border-none items-center dark:bg-dark-black-900 hidden md:flex outline-none`}
					ref={sidebar}
					onBlur={navCollapse}
					tabIndex={-1}
				>
					<h1 className='text-[25px] flex w-full px-4 items-center capitalize font-semibold gap-2'>
						<GiWhiteBook className='text-primary-500 text-3xl' />{' '}
						courses.
					</h1>
					<SidebarContent className='mt-6 w-[13rem] p-0'>
						<SidebarGroup className='py-1.5 m-0'>
							<SidebarGroupLabel className='uppercase text-dark-black-400 text-sm'>
								general
							</SidebarGroupLabel>
							<SidebarGroupContent className='w-full py-3'>
								<SidebarMenu className='w-full'>
									{SidebarItems[0].map((item) => (
										<SidebarMenuItem
											key={item.title}
											className='dark:text-dark-black-400 dark:hover:bg-dark-black-800 dark:hover:text-white hover:bg-blue-50 hover:text-blue-500 transition duration-500 rounded-2xl font-light active:font-semibold hover:font-semibold text-dark-black-800'
										>
											<Link
												to={`/${item.text}`}
												className={`${
													location.pathname ==
													`/${item.text}`
														? 'active'
														: null
												} text-base flex items-center justify-start gap-3 py-2.5 px-6 capitalize w-full transition duration-500`}
											>
												<item.icon className='text-2xl' />
												<p className='transtion duration-400'>
													{item.text}
												</p>
											</Link>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						<SidebarGroup className='py-0 m-0'>
							<SidebarGroupLabel className='uppercase text-dark-black-400 text-sm'>
								courses
							</SidebarGroupLabel>
							<SidebarGroupContent className='w-full py-3'>
								<SidebarMenu className='w-full'>
									{SidebarItems[1].map((item) => (
										<SidebarMenuItem
											key={item.title}
											className='dark:text-dark-black-400 dark:hover:bg-dark-black-800 dark:hover:text-white hover:bg-blue-50 hover:text-blue-500 transition duration-500 rounded-2xl font-light active:font-semibold hover:font-semibold text-dark-black-800'
										>
											<Link
												to={`/${item.text}`}
												className={`${
													location.pathname ==
													`/${item.text}`
														? 'active'
														: null
												} text-base flex items-center justify-start gap-3 py-2.5 px-6 capitalize w-full transition duration-500`}
											>
												<item.icon className='text-2xl' />
												<p className='transtion duration-400'>
													{item.text}
												</p>
											</Link>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						<SidebarGroup className='py-1.5 m-0'>
							<SidebarGroupLabel className='uppercase text-dark-black-400 text-sm'>
								others
							</SidebarGroupLabel>
							<SidebarGroupContent className='w-full py-3'>
								<SidebarMenu className='w-full'>
									{SidebarItems[2].map((item) => (
										<SidebarMenuItem
											key={item.title}
											className='dark:text-dark-black-400 dark:hover:bg-dark-black-800 dark:hover:text-white hover:bg-blue-50 hover:text-blue-500 transition duration-500 rounded-2xl font-light active:font-semibold hover:font-semibold text-dark-black-800'
										>
											<Link
												to={`/${item.text}`}
												className={`${
													location.pathname ==
													`/${item.text}`
														? 'active'
														: null
												} text-base flex items-center justify-start gap-3 py-2.5 px-6 capitalize w-full transition duration-500`}
											>
												<item.icon className='text-2xl' />
												<p className='transtion duration-400'>
													{item.text}
												</p>
											</Link>
										</SidebarMenuItem>
									))}
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>
				<Outlet />
			</SidebarProvider>
		</main>
	);
};
