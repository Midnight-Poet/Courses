import { useState } from 'react';
import { Topnav } from '../components/dashboardComponents/topnav';
import { FaStar } from 'react-icons/fa6';
import { CiCirclePlus } from 'react-icons/ci';
import { PiDotsThreeOutlineLight } from 'react-icons/pi';
import object from '../assets/OBJECTS.png';
import { CourseArr, TaskArr } from '../arrays/dashboardArray/courses';
import { Card, TaskCard } from '../components/dashboardComponents/card';
import { Calendar } from '@/components/ui/calendar';
import { scheduleArray } from '../arrays/dashboardArray/schedule';

export let Dashboard = () => {
	const [date, setDate] = useState(new Date());
	let time = [9, 10, 11, 12, 1, 2];

	return (
		<main className=' w-full p-4.5'>
			<Topnav
				header={'Welcome Back, Peter!'}
				text={'Let’s boost your knowledge today and learn a new things'}
			/>
			<section className='mt-4 flex justify-between flex-col sm:flex-row'>
				<section className=' sm:w-[58%] md:w-[65%]'>
					<div className='relative flex justify-center bg-primary-500 rounded-[21px] h-max'>
						<div className='p-5 md:p-10 self-start  w-full z-1'>
							<h1 className='relative text-white'>
								Unlock premium
								<br />
								<div className='flex gap-2 items-center'>
									access
									<div className='flex items-center justify-center text-lg gap-1.5 text-[#FFB45D]'>
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
								</div>
							</h1>
							<p className='text-xs md:text-sm leading-[300%] text-primary-100'>
								to a world of knowledge at your fingertips!
							</p>
							<button className='py-3.5 px-5 capitalize bg-white border border-white rounded-[12px] text-primary-400 cursor-pointer hover:bg-primary-500 hover:text-white'>
								get premiuim
							</button>
						</div>
						<div className='absolute top-[19%] sm:top-[18.5%] md:top-[22.5%] right-0'>
							<img src={object} className='w-[80%] md:w-full' />
						</div>
					</div>
					<div className='my-7'>
						<div className='flex items-center justify-between'>
							<h5>my courses</h5>
							<span className='text-base'>See all</span>
						</div>
						<div className='flex justify-between flex-wrap my-5'>
							{CourseArr.map((data) => {
								return (
									<Card
										logo={data.logo}
										// logoName={data.logoName}
										text={data.text}
										timeTaken={data.timeTaken}
										totalTime={data.totalTime}
									/>
								);
							})}
						</div>
					</div>
					<div>
						<div className='flex items-center justify-between'>
							<h5>Today’s Task</h5>
							<span className='text-base'>See all</span>
						</div>
						<div>
							{TaskArr.map((data) => {
								return (
									<TaskCard
										course={data.course}
										tutor={data.tutor}
										type={data.type}
										status={data.status}
									/>
								);
							})}
						</div>
					</div>
				</section>
				<section className='w-full sm:w-[40%] md:w-[33%]'>
					<Calendar
						mode='single'
						selected={date}
						onSelect={setDate}
						className='overflow-auto h-[15rem] sm:h-max rounded-lg border w-full dark:bg-dark-black-900'
					/>
					<div className='bg-white dark:bg-dark-black-900 rounded-[23px] px-4 py-4.5 mt-5'>
						<div className='flex justify-between items-center'>
							<h5>my schedule</h5>
							<button className='h-[34px] border border-primary-500 w-[34px] text-white bg-primary-500 rounded-full text-xl hover:bg-white dark:hover:bg-dark-black-700 dark:hover:text-white hover:text-primary-500'>
								+
							</button>
						</div>
						<div className='flex items-center justify-between mt-5'>
							<div className='flex flex-col gap-2 [&>p]:h-20 [&>p]:text-base [&>p]:text-dark-black-500 font-normal [&>p]:uppercase'>
								<p>09:00am</p>
								<p>10:00am</p>
								<p>11:00am</p>
								<p>12:00pm</p>
								<p>01:00pm</p>
								<p>02:00pm</p>
							</div>
							<div className='w-[70%] flex flex-col justify-center gap-3'>
								{scheduleArray.map((obj) => {
									let arr = [];
									for (let i = 0; i < time.length; i++) {
										if (obj.start == time[i]) {
											i += obj.duration - 1;
											arr.push({
												status: true,
												length: obj.duration,
											});
										} else {
											arr.push({
												status: false,
											});
										}
									}
									return arr.map((bool) => {
										return bool.status ? (
											<div
												className={`flex flex-wrap bg-dark-black-50 dark:bg-dark-black-700 dark:text-white rounded-2xl py-4 px-3 text-primary-500`}
											>
												<p className='w-full text-sm text-primary-300 dark:text-dark-black-200 flex items-center justify-between'>
													UI/UX Design Basic
													<PiDotsThreeOutlineLight className='text-2xl' />
												</p>
												<h5 className='text-base font-semibold my-2 w-full'>
													Complete Task 12{' '}
												</h5>

												<p className='content-end'>
													{obj.start}
													.00AM - {obj.stop()}
													.00PM
												</p>
											</div>
										) : (
											<div className='h-20 content-center justify-items-center bg-dark-black-50 dark:bg-dark-black-846 rounded-2xl text-3xl'>
												<CiCirclePlus />
											</div>
										);
									});
								})}
							</div>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};
