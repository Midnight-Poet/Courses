import { courses } from '../arrays/coursesArray/course';
import { GoDownload } from 'react-icons/go';
import { Topnav } from '../components/dashboardComponents/topnav';
import { courseDetailsArray } from '../arrays/coursesArray/courseDetail';
import { Section } from '../components/coursesComponents/section';
import Video from '../assets/courses/Video.png';

export let CourseDetails = () => {
	return (
		<main className='w-full p-4.5'>
			<Topnav header={courses[0].title} />

			<section className='rounded-2xl  bg-white dark:bg-dark-black-900 p-4 w-full my-5 '>
				{/* <div > */}
				<div>
					<img
						src={courses[0].video}
						className='w-full mb-5 sm:hidden'
					/>
					<img src={Video} className='w-full sm:block hidden mb-5' />
					<div className='bg-dark-black-50 dark:bg-dark-black-846 rounded-3xl p-4 flex flex-col sm:flex-row justify-between items-center'>
						<div className='flex-between sm:gap-8'>
							<div className='w-4/6 sm:w-max'>
								<h4>mentor introduction</h4>
								<p className='w-4/5 sm:w-max sm:gap-3 capitalize flex-between text-dark-black-500 text-sm'>
									Introduction
									<span className='w-1 h-1 rounded-full bg-dark-black-500'></span>
									course 1
								</p>
							</div>
							<div className='p-4 rounded-full bg-primary-50 dark:bg-dark-black-800'>
								<GoDownload className='text-4xl text-primary-500' />
							</div>
						</div>
						<div className='mt-8 sm:m-0 flex-between [&>button]:w-full [&>button]:sm:w-max gap-5'>
							<button className='light-btn'>discusson</button>
							<button className='dark-btn'>next videos</button>
						</div>
					</div>
				</div>
				{/* </div> */}
			</section>

			<section className='rounded-2xl  bg-white dark:bg-dark-black-900 p-4 w-full my-5 '>
				<h4>modules</h4>
				<div className='flex-start flex-wrap'>
					{courseDetailsArray.map((items) => {
						return (
							<Section
								list={items.list}
								title={items.title}
								listNumber={items.listNumber()}
							/>
						);
					})}
				</div>
			</section>
		</main>
	);
};
