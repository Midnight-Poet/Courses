import { Topnav } from '../components/dashboardComponents/topnav';
import banner from '../assets/discover/Banner.png';
import { Link } from 'react-router';
import { CourseArray } from '../arrays/discoverArray/courseArray';
import { Container } from '../components/discoverComponents/course';

export let Discover = () => {
	let sections = [
		'Trending',
		'IT & SOftware',
		'Design',
		'Marketing',
		'Language',
	];
	let active = false;
	return (
		<main className=' w-full p-4.5'>
			<Topnav header={'Discover'} />
			<section className='mt-8'>
				<div className='w-full flex-center overflow-hidden rounded-2xl'>
					<img src={banner} className='min-w-max sm:w-full' />
				</div>
			</section>
			<section className='mt-8 '>
				<div className='flex-between'>
					<div className=' flex-between [&>button]:hidden [&>button]:sm:block [&>button]:first:block [&>button]:first:text-white [&>button]:first:bg-primary-500'>
						{sections.map((section) => {
							return (
								<button
									className={`text-dark-black-400 text-base py-3 px-4 rounded-[12px]`}
								>
									{section}
								</button>
							);
						})}
					</div>
					<div className='py-3 px-4 rounded-[8px] bg-white dark:bg-dark-black-900 w-max'>
						<select name='' className=''>
							<option value=''>All</option>
						</select>
					</div>
				</div>
				<div className='sm:flex justify-between flex-col sm:flex-row flex-wrap [&>div]:sm:w-[32%]'>
					{CourseArray.map((items) => {
						return (
							<Container
								image={items.image}
								title={items.title}
								pfp={items.pfp}
								name={items.name}
								price={items.price}
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
};
