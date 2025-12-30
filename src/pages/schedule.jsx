import { PiDotsThreeOutlineLight } from 'react-icons/pi';
import { schedules } from '../arrays/scheduleArray/schedules';
import { Topnav } from '../components/dashboardComponents/topnav';
import { CiCirclePlus } from 'react-icons/ci';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';

export let Schedule = () => {
	let year = new Date().getFullYear();
	let month = new Date().getMonth();
	let day = new Date().getDay();
	let date = new Date().getDate();
	let actualDay;
	let actualMonth;

	let dayCollection = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	let monthCollection = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	let fullDate = `${dayCollection[day]} ${date} of ${monthCollection[month]}, ${year}`;
	let weeks = [];

	let findWeeks = () => {
		weeks.push(new Array());
		for (let i = 1; i <= 31; i++) {
			let mnt = new Date(2025, month, i);
			if (
				mnt.getMonth() == month &&
				mnt.getDay() == 0
			) {
				weeks.push(new Array());
			}
			let j = weeks.length - 1;
			let k = weeks[j].length;
			weeks[j].push(new Object());
			weeks[j][k].day = mnt.getDay();
			weeks[j][k].date = mnt.getDate();
			weeks[j][k].month = mnt.getMonth();
		}
	};
	findWeeks();

	let result;
	let result2;

	weeks.forEach((week) => {
		week.forEach((days) => {
			days.date == new Date().getDate()
				? (result = days)
				: null;
		});

		week.findIndex((one) =>
			one == result ? (result2 = week) : null
		);
	});
	let result3 = weeks.findIndex(
		(week) => result2 == week
	);
	let result4 = weeks[result3].findIndex(
		(day) => result == day
	);
	let time = [];
	let j = 8;
	let fay = 'AM';
	for (let i = 0; i < 10; i++) {
		time.push(new Object());
		let k = time.length - 1;
		j == 12 ? (fay = 'PM') : null;
		if (j > 12) {
			j = 1;
			time[k].day = fay;
			time[k].time = `0${j}`;
		} else if (j.toString().length < 2) {
			time[k].day = fay;
			time[k].time = `0${j}`;
		} else {
			time[k].day = fay;
			time[k].time = j;
		}
		j += 1;
	}
	// console.log(weeks)

	const [datee, setDate] = useState(new Date());
	return (
		<main className=' w-full p-4.5'>
			<Topnav header={'Schedule'} />
			<section className='mt-7 flex justify-between items-start sm:flex-row flex-col'>
				<section className='bg-white dark:bg-dark-black-900 dark:text-white rounded-3xl p-5 sm:w-[65%]'>
					<div className='flex items-center gap-3'>
						<h5>Schedule task</h5>
						<hr className=' h-6 w-0.5 bg-dark-black-300' />
						<h5 className='text-primary-500'>
							week {result3 + 1} of{' '}
							{length > 600 ?monthCollection[month] : monthCollection[month].slice(0, 3)}, {year}
						</h5>
						<div className='ml-auto'>
							<button className='p-1 sm:p-2 mx-2 border-2 border-dark-black-500 rounded-[10px]'>
								<GrFormPrevious />
							</button>
							<button className='p-1 sm:p-2 border-2 border-dark-black-500 rounded-[10px]'>
								<GrFormNext />
							</button>
						</div>
					</div>
					<div className='my-5 capitalize flex items-center justify-between text-dark-black-500'>
						<span className='w-[10%]'>
							time
						</span>
						<div className='flex items-center justify-between gap-3.5 w-[85%]'>
							{weeks[result3].map((days) => {
								return (
									<div
										className={`text-center font-medium text-base ${
											days.date ==
											new Date().getDate()
												? 'text-primary-500'
												: null
										}`}
									>
										<h4 className='my-2'>
											{days.date}
										</h4>
										<span>
											{length > 600
												? dayCollection[
														days
															.day
												  ].slice(
														0,
														3
												  )
												: dayCollection[
														days
															.day
												  ].slice(
														0,
														2
												  )}
										</span>
									</div>
								);
							})}
						</div>
					</div>
					<div className='text-dark-black-500 mt-10 relative flex justify-between '>
						<div className='flex items-start justify-start flex-col w-max [&>span]:h-[80px]'>
							{time.map((digit) => {
								return (
									<span className='text-sm md:text-base flex before:bg-dark-black-200 before:h-0.5 before:w-[85%] before:rounded before:absolute before:translate-y-2 before:translate-x-[20%]'>
										{length < 950
											? `${digit.time} ${digit.day}`
											: `${digit.time}:00${digit.day}`}
									</span>
								);
							})}
						</div>
						<div className='grid grid-rows-10 grid-cols-4 gap-5 w-[87%] '>
							{schedules.map((items) => {
								return (
									<div className='displayGrid'>
										<p className='w-full capitalize text-sm text-primary-300 dark:text-dark-black-200 flex items-center justify-between overflow-x'>
											<span className='w-[80%]'>
												{
													items.course
												}
											</span>
											<PiDotsThreeOutlineLight className='text-2xl' />
										</p>
										<h5 className='text-sm sm:text-base font-semibold my-2 w-full'>
											{items.task}
										</h5>

										<p className='content-end'>
											{items.start}
											.00AM -{' '}
											{items.stop()}
											.00PM
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<section className='sm:w-[33%] w-full mt-5 sm:m-0'>
					<button className='mb-5 hover:bg-white hover:text-black border border-primary-500 flex items-center justify-center gap-2 w-full bg-primary-500 rounded-3xl p-4 text-white text-base capitalize'>
						<CiCirclePlus className='text-2xl' />
						add new event
					</button>

					<Calendar
						mode='single'
						selected={datee}
						onSelect={setDate}
						className='overflow-auto h-[15rem] sm:h-max rounded-xl border w-full dark:bg-dark-black-900'
					/>
					<div className='bg-white dark:bg-dark-black-900 dark:text-white p-6 rounded-3xl mt-5'>
						<div className='flex items-center justify-between '>
							<h5>category list</h5>
							<button className='hover:bg-white hover:text-black bg-primary-500 text-2xl h-8 w-8 text-white border border-primary-500 hover: flex justify-center items-center rounded-full'>
								+
							</button>
						</div>
						<ul className='mt-10 [&>li]:my-3  [&>li]:flex [&>li]:justify-between [&>li]:items-center [&>li>span]:py-1 [&>li>span]:px-3 [&>li>span]:bg-dark-black-100 [&>li>span]:rounded-full [&>li>span]:dark:bg-dark-black-800 [&>li>span]:dark:text-white'>
							<li>
								Envato Mastery
								<span>1</span>
							</li>
							<li>
								UI/UX Design Basic
								<span>1</span>
							</li>
							<li>
								Mastering Git & Vercel App
								<span>1</span>
							</li>
							<li>
								Live Class
								<span>1</span>
							</li>
						</ul>
					</div>
				</section>
			</section>
		</main>
	);
};
