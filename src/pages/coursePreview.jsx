import { Topnav } from '../components/dashboardComponents/topnav';
import { FaUsers } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { FaCirclePlay } from 'react-icons/fa6';
import { FaShoppingBasket } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import img2 from '../assets/discover/coverimage/Image (2).png';
import pfp from '../assets/discover/pfp/Avatar.png';

export let PreviewDetails = () => {
	let header = ['description', 'tools', 'reviews', 'classmates'];
	return (
		<main className='p-4.5 w-full'>
			<Topnav header={'course detail'} />
			<section className='flex-start w-full flex-col sm:flex-row gap-3'>
				<section className='sm:w-[60%] md:w-[65%] rounded-2xl p-6 bg-white mt-7 dark:bg-dark-black-900'>
					<h4>Learn from Basic: React Javascript</h4>
					<div>
						<div className='flex-between sm:hidden mt-8 [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:py-3 [&>div]:px-3 [&>div]:rounded-2xl [&>div]:bg-primary-50 [&>div]:dark:bg-dark-black-800  [&>div]:flex-col [&>div]:gap-1 '>
							<div>
								<FaUsers className='text-3xl text-primary-500' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									enrolled
								</span>
							</div>
							<div>
								<FaBookOpen className='text-3xl text-primary-500' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									modules
								</span>
							</div>
							<div>
								<FaCirclePlay className='text-3xl text-primary-500 ' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									videos
								</span>
							</div>
							<div>
								<FaStar className='text-3xl text-primary-500' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									reviews
								</span>
							</div>
						</div>
						<div className='mt-5 [&>img]:w-full'>
							<img src={img2} alt='' />
						</div>
						<div className='mt-5'>
							<div className='[&>p]:first:text-primary-500 flex-between overflow-auto'>
								{header.map((text) => {
									return (
										<p className='text-base text-dark-black-500 capitalize'>
											{text}
										</p>
									);
								})}
							</div>
							<hr className='mt-3' />
							<div className='[&>p]:mt-5 text-base text-dark-black-600 [&>p]:hidden [&>p]:sm:block [&>p]:first:block'>
								<p>
									Welcome to the Master Class: React JS and
									Tailwind CSS! 🚀 This comprehensive course
									is your gateway to mastering the art of
									building modern and responsive user
									interfaces. Whether you're a seasoned
									developer or just starting, this course will
									guide you through the intricacies of React
									JS and Tailwind CSS.
								</p>

								<p>
									👨‍💻 Dive into hands-on projects and
									real-world applications that will solidify
									your understanding of these powerful
									technologies. From component-based
									architecture in React to the utility-first
									approach of Tailwind CSS, this class
									provides an in-depth exploration of the
									tools and techniques used by industry
									experts.
								</p>
								<p>
									🚀 By the end of this course, you'll be
									equipped with the skills to create seamless,
									visually stunning web applications. Join us
									on this coding adventure and unlock the
									potential of React JS and Tailwind CSS in
									your projects. Let's code, create, and
									elevate your web development journey
									together!
								</p>
							</div>
						</div>
						<div className='sm:hidden'>
							<div className='flex-between text-primary-500 dark:text-white my-5'>
								<p className='capitalize text-base'>price</p>
								<span className='text-2xl'>$59.5</span>
							</div>
							<div className='flex gap-3'>
								<button className='rounded-2xl text-3xl p-4 bg-primary-50 dark:bg-dark-black-800 dark:text-white text-primary-500'>
									<FaShoppingBasket />
								</button>
								<button className='dark-btn  w-full'>
									checkout
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className='sm:w-[40%] md:w-[35%] mt-7'>
					<div className='bg-white dark:bg-dark-black-900 hidden sm:block py-4 px-6 rounded-3xl '>
						<h5>overview</h5>
						<div className='flex-between flex-wrap mt-8 [&>div]:flex [&>div]:w-[48%] [&>div]:mt-3 [&>div]:flex-wrap [&>div]:items-center [&>div]:justify-center [&>div]:p-3 [&>div]:rounded-2xl [&>div]:bg-primary-50 [&>div]:dark:bg-dark-black-800 [&>div]:gap-1 '>
							<div>
								<FaUsers className='text-3xl text-primary-500 w-full' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									enrolled
								</span>
							</div>
							<div>
								<FaBookOpen className='text-3xl text-primary-500 w-full' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									modules
								</span>
							</div>
							<div>
								<FaCirclePlay className='text-3xl text-primary-500  w-full' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									videos
								</span>
							</div>
							<div>
								<FaStar className='text-3xl text-primary-500 w-full' />
								<p className='text-lg font-medium'>52</p>
								<span className='text-dark-black-400 text-sm capitalize'>
									reviews
								</span>
							</div>
						</div>

						<div>
							<div className='flex-between text-primary-500 dark:text-white my-5'>
								<p className='capitalize text-base'>price</p>
								<span className='text-2xl'>$59.5</span>
							</div>
							<div className='flex gap-3'>
								<button className='rounded-2xl text-3xl p-4 bg-primary-50  dark:bg-dark-black-800 dark:text-white text-primary-500'>
									<FaShoppingBasket />
								</button>
								<button className='dark-btn  w-full'>
									checkout
								</button>
							</div>
						</div>
					</div>
					<div className='bg-white dark:bg-dark-black-900 mt-5 py-4 px-6 rounded-3xl'>
						<h4>about mentor</h4>
						<div className='mt-5'>
							<div className='flex gap-3 items-center'>
								<img src={pfp} className='w-10' />
								<div>
									<h5 className='font-medium'>Nina Kim</h5>
									<span className='text-dark-black-600'>
										Web/Mobile Developer
									</span>
								</div>
							</div>
							<div className='mt-5 text-dark-black-600 text-base'>
								<p>
									Your expert mentor in the world of web and
									mobile development.
									<br />
									<br />
									With a wealth of experience, Nina guides
									aspiring developers through the intricacies
									of building dynamic and responsive
									applications.
								</p>
							</div>
							<div className='flex items-center justify-self-end my-3 gap-2'>
								<FaStar className='text-yellow-500 text-lg' />
								<span className='text-dark-black-600 text-xs'>
									4.9/5 (120 Reviews)
								</span>
							</div>
						</div>
					</div>
					<div className='bg-white dark:bg-dark-black-900 mt-5 py-4 px-6 rounded-3xl'>
						<h4>modules</h4>
						<div className='mt-6'>
							<ul className='list-none text-left text-base text-dark-black-600 [&>li]:flex [&>li]:items-center [&>li]:mt-1  [&>li]:gap-3 [&>li>span:nth-child(3)]:ml-auto'>
								<li>
									<span>01</span>
									<span>Introduction to React JS</span>
									<span>
										<CiCircleCheck className='text-2xl' />
									</span>
								</li>
								<li>
									<span>02</span>
									<span>Introduction to Tailwind CSS</span>
									<span>
										<CiCircleCheck className='text-2xl' />
									</span>
								</li>
								<li>
									<span>03</span>
									<span>Hands-On Project</span>
									<span>
										<CiCircleCheck className='text-2xl' />
									</span>
								</li>
								<li>
									<span>04</span>
									<span>Code Snippets and Templates</span>
									<span>
										<CiCircleCheck className='text-2xl' />
									</span>
								</li>
								<li>
									<span>05</span>
									<span>Exercise to a Real Project</span>
									<span>
										<CiCircleCheck className='text-2xl' />
									</span>
								</li>
								<li>
									<span>06</span>
									<span>Closing</span>
									<span>
										<CiCircleCheck className='text-2xl' />
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};
