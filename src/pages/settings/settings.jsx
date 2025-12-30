import { Topnav } from '../../components/dashboardComponents/topnav';
import { Link, Outlet } from 'react-router';
import { IoSettingsOutline } from 'react-icons/io5';
import { CiUser, CiBellOn, CiShare2 } from 'react-icons/ci';
import { CiLock } from 'react-icons/ci';
import { FaBookAtlas, FaGithub } from 'react-icons/fa6';
import { IoColorPaletteOutline } from 'react-icons/io5';

export let Settings = () => {
	let navItems = {
		profile: [
			{ name: 'general', link: '/settings', icon: <IoSettingsOutline /> },
			{
				name: 'edit profile',
				link: '/settings/profile',
				icon: <CiUser />,
			},
			{
				name: 'change password',
				link: '/settings/password',
				icon: <CiLock />,
			},
			{
				name: 'notificaton',
				link: '/settings/notification',
				icon: <CiBellOn />,
			},
		],
		preference: [
			{
				name: 'language',
				link: '/settings/language',
				icon: <FaBookAtlas />,
			},
			{
				name: 'theme',
				link: '/settings/theme',
				icon: <IoColorPaletteOutline />,
			},
		],
		apps: [
			{
				name: 'social media',
				link: '/settings/social',
				icon: <CiShare2 />,
			},
			{
				name: 'apps integration',
				link: '/settings/apps',
				icon: <FaGithub />,
			},
		],
	};

	return (
		<main className='p-4.5 w-full'>
			<Topnav header={'settings'} />
			<section className='flex [&>main]:pl-5 [&>main]:w-full justify-between w-full bg-white dark:bg-dark-black-900 rounded-3xl p-6 mt-5'>
				<nav className='min-w-fit pr-3 border-r sm:block hidden'>
					{Object.keys(navItems).map((items) => {
						return (
							<ul>
								<h6 className='uppercase text-sm text-dark-black-400 mb-2'>
									{items}
								</h6>
								{navItems[items].map((inner) => {
									return (
										<Link to={inner.link}>
											<li className='flex items-center gap-1 capitalize text-dark-black-600 py-4 rounded-2xl px-5 w-full text-base cursor-pointer transition duration-500 hover:bg-primary-50 dark:hover:bg-dark-black-800 hover:text-primary-500 dark:hover:text-white'>
												<span className='text-2xl'>
													{inner.icon}
												</span>
												{inner.name}
											</li>
										</Link>
									);
								})}
							</ul>
						);
					})}
				</nav>
				<Outlet />
			</section>
		</main>
	);
};
