import { courses } from '../arrays/coursesArray/course';
import { Topnav } from '../components/dashboardComponents/topnav';
import { LuAudioLines } from 'react-icons/lu';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { SlBookOpen } from 'react-icons/sl';
import { AiOutlinePlayCircle } from 'react-icons/ai';

export let Courses = () => {
	return (
		<main className='w-full overflow-hidden p-4.5'>
			<Topnav header={'My Courses'} />
			<section className='my-5'>
				<div className='rounded-2xl  bg-white dark:bg-dark-black-900 p-4 my-5 '>
					<header className='flex items-center gap-5 text-lg capitalize mb-5'>
						<LuAudioLines className='p-1 rounded-full text-primary-500 text-3xl' />{' '}
						Continue watching
					</header>
					<div className='flex-between overflow-x-auto  [&::-webkit-scrollbar]:hidden'>
						{courses.map((course) => {
							return (
								<div className='min-w-5/6 sm:min-w-fit mr-8'>
									<img
										src={course.video}
										className='w-full sm:w-full'
									/>
									<div className='mt-3 w-max'>
										<h5>{course.title}</h5>
										<p className='flex items-center gap-2 uppercase text-dark-black-400 font-normal'>
											chapter {course.chapter}
											<span className='h-1 w-1 rounded-full bg-dark-black-400'></span>
											part {course.part}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div>
					<div className='flex-start mt-15'>
						<div className='w-1/2 '>
							<h4 className='font-normal leading-0 mb-5'>
								enrolled course
							</h4>
							<p className='text-dark-black-400 mt-2'>
								Dive in, learn, and let your potential unfold!
							</p>
						</div>
						<div className='flex justify- w-[32%] sm:w-max sm:gap-5'>
							<div className='h-10 w-10 border border-white sm:w-4/6 sm:h-max bg-white dark:bg-black rounded-full sm:rounded sm:py-2 sm:px-3 flex gap-3 text-dark-black-400 text-4xl'>
								<PiMagnifyingGlassLight />
								<input type="text" name="" placeholder='Find your course...' className="hidden sm:block w-full text-lg text-white capitalize outline-none" />
							</div>
							<div className='w-max'>
								<select
									name=''
									className='bg-white dark:bg-dark-black-800 rounded-lg py-2 px-3 sm:py-4'
								>
									<option value=''>All <span className='hidden sm:block'>Course</span></option>
									<option value=''></option>
									<option value=''></option>
									<option value=''></option>
								</select>
							</div>
						</div>
					</div>
					<div className='mt-10'>
						{courses.map((course) => {
							return (
								<div className='flex-between bg-white dark:bg-dark-black-900 p-4 rounded-2xl mb-4 flex-wrap'>
									<div className='w-4/5 sm:w-2/6'>
										<h5>{course.head}</h5>
										<div className='flex-between text-sm w-2/4 sm:w-3/4 md:w-1/4 my-2'>
											<span className='text-dark-black-400'>
												Mentor
											</span>
											<p className='flex-between gap-2 '>
												<img
													src={course.profile}
													className='w-[30px] rounded-full'
												/>
												{course.mentor}
											</p>
										</div>
									</div>
									<div className='w-1/6 text-center sm:w-max'>
										<span className='text-dark-black-400 capitalize text-sm'>
											duration
										</span>
										<p className='text-base font-medium'>
											{course.duration}
										</p>
									</div>
									<div className='w-1/2 flex-between mx-2 sm:w-1/6'>
										<p>{course.progress}%</p>
										<div className='w-4/6 h-1 bg-dark-black-400 rounded-2xl'></div>
									</div>
									<div className='w-2/5 sm:w-max flex-between gap-3 [&>p]:flex [&>p]:items-center [&>p]:text-base [&>p]:font-normal'>
										<p>
											<HiMiniUserGroup className='text-2lg text-dark-black-400 mr-1' />
											{course.students}
										</p>
										<p>
											<SlBookOpen className='text-2lg text-dark-black-400 mr-1' />
											{course.bookmarks}
										</p>
										<p>
											<AiOutlinePlayCircle className='text-2lg text-dark-black-400 mr-1' />
											{course.watched}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};
