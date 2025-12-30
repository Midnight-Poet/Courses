import { PriceCard } from '../components/dashboardComponents/card';
import { Topnav } from '../components/dashboardComponents/topnav';
import { RiHeartFill, RiHeartsFill } from 'react-icons/ri';
import { TbLockHeart } from 'react-icons/tb';
import { GiLockedHeart } from 'react-icons/gi';
import { Plans } from '../arrays/paymentArray/plans';

export let Payment = () => {
	return (
		<main className=' w-full p-4.5'>
			<Topnav header={'Subscription Plan'} />
			<section className='mt-7 rounded-3xl p-6 w-full bg-white dark:bg-dark-black-900'>
				<div className='py-2 border-b-2 border-dark-black-100 dark:border-dark-black-800 w-full'>
					<h1>planning</h1>
					<p className='my-2 text-sm sm:text-base text-dark-black-400'>
						Set payment planning for your
						customizable dashboard to find out
						how much spending each month
					</p>
				</div>
				<div className='sm:flex sm:justify-between md:mt-5'>
					<PriceCard
						icon={
							<RiHeartFill className='text-yellow-500' />
						}
						header={'free'}
						text={
							'There are some limitations that make your productive days are ineffective '
						}
						price={0}
						discount={0}
						btnStatus={false}
						button={'your current plan'}
						iconColor={'yellow-500'}
					/>
					<PriceCard
						icon={
							<RiHeartsFill className='text-green-500' />
						}
						header={'pro'}
						text={
							'Enjoy many features that fit for your work space.'
						}
						price={59}
						choice={true}
						discount={'2.5% + $0.5'}
						btnStatus={true}
						button={'try for free for 7 days'}
						iconColor={'green-500'}
					/>
					<PriceCard
						icon={
							<GiLockedHeart className='text-red-500' />
						}
						header={'Expertise'}
						text={
							'Enjoy all the features without limitations and boost up your productivity'
						}
						price={129}
						discount={'2.5% + $0.5'}
						btnStatus={true}
						button={'try for free for 7 days'}
						iconColor={'red-500'}
					/>
				</div>
				<table className='my-10 gap-2  w-full'>
					<thead className='table-head w-full'>
						<tr className='overflow-hidden w-full'>
							<th className='text-2lg capitalize font-semibold'>
								planning feature
							</th>
							<th>
								<div className='flex items-center justify-center gap-2'>
									<RiHeartFill className='text-yellow-500 text-3xl text-center' />
									<span className='capitalize hidden md:block text-lg'>
										free
									</span>
								</div>
							</th>
							<th>
								<div className='flex items-center justify-center gap-2'>
									<RiHeartsFill className='text-green-500 text-3xl' />
									<span className='capitalize hidden md:block text-lg'>
										pro
									</span>
								</div>
							</th>
							<th>
								<div className='flex items-center justify-center gap-2'>
									<GiLockedHeart className='text-red-500 text-3xl' />
									<span className='capitalize hidden md:block text-lg'>
										expertise
									</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody className=' table-body'>
						{Plans.map((details) => {
							return (
								<tr className='text-base py-10'>
									<td>{details.title}</td>
									<td>
										<input
											type='checkbox'
											className='checkbox'
											disabled
											checked={
												details.free
											}
										/>
									</td>
									<td>
										<input
											type='checkbox'
											className='checkbox'
											disabled
											checked={
												details.pro
											}
										/>
									</td>
									<td>
										<input
											type='checkbox'
											className='checkbox'
											disabled
											checked={
												details.expert
											}
										/>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</section>
		</main>
	);
};
