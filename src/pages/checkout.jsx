import { Topnav } from '../components/dashboardComponents/topnav';
import visa from '../assets/visa.png';
import masterCard from '../assets/MASTERCARD.png';
import { Inputs } from '../components/dashboardComponents/inputs';
import { CiCirclePlus } from 'react-icons/ci';
import { FaCrown } from 'react-icons/fa6';
import { TbProgressAlert } from 'react-icons/tb';
import { FaCheckCircle } from 'react-icons/fa';
import { paymentOptions } from '../arrays/paymentArray/paymentOptions';

export let Checkout = () => {
	return (
		<main className='w-full p-4.5'>
			<Topnav header={'checkout'} />
			<section className='flex-start flex-col sm:flex-row'>
				<section className='sm:w-[55%]'>
					<header className='text-lg font-normal my-5'>
						Payment Method
					</header>
					<form
						action=''
						className='capitalize text-base bg-white dark:bg-dark-black-900 rounded-3xl py-6 px-4'
					>
						<div className='flex-between'>
							<span className='text'>
								Credit / Debit Card
							</span>
							<div className='flex gap-1'>
								<img src={visa} alt='' />
								<img
									src={masterCard}
									alt=''
								/>
							</div>
						</div>
						<div className='flex flex-wrap justify-between gap-2 w-full'>
							<Inputs
								title={'Name on Card'}
								name={'name'}
								type={'text'}
								width={'w-full'}
							/>
							<Inputs
								title={'Card Number'}
								name={'card number'}
								type={'number'}
								width={'w-full'}
							/>

							<Inputs
								title={'Expiry Date'}
								name={'expiry'}
								type={'number'}
								width={'w-[48%]'}
							/>
							<Inputs
								title={'CVC/CVV'}
								name={'cvc'}
								type={'number'}
								width={'w-[48%]'}
							/>
						</div>
					</form>
					<div>
						<div className='sm:hidden p-4 rounded-2xl bg-white dark:bg-dark-black-900 mt-5 flex-between'>
							<h6 className='text-base capitalize font-medium'>
								Other payment method
							</h6>
							<CiCirclePlus className='text-3xl' />
						</div>
						<div className='hidden sm:block'>
							{paymentOptions.map((items) => {
								return (
									<div className='p-4 rounded-2xl bg-white dark:bg-dark-black-900 mt-5 flex-between'>
										<h6 className='text-base capitalize font-medium'>
											{items.name}
										</h6>
										<div>
											<img
												src={
													items.image
												}
												alt=''
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className='sm:w-[43%] flex flex-col'>
					<div>
						<header className='text-lg font-normal my-5 capitalize'>
							order details
						</header>
						<div className='bg-white dark:bg-dark-black-900 rounded-3xl py-6 px-4 flex-between'>
							<div className='bg-primary-50 dark:bg-dark-black-800 rounded-[12px] text-[50px] text-primary-500 p-[9%]'>
								<FaCrown />
							</div>
							<div className='w-[62%] flex flex-col gap-2 sm:gap-1'>
								<p className='uppercase text-base font-normal text-primary-500'>
									subscription
								</p>
								<p className='text-base'>
									Subscription PRO
								</p>
								<span className='text-sm text-dark-black-400'>
									1 month
								</span>
								<h2 className='font-normal'>
									$59
								</h2>
							</div>
						</div>
					</div>
					<div className='bg-white dark:bg-dark-black-900 rounded-2xl p-4 mt-5 flex-between text-dark-black-600'>
						<TbProgressAlert className='text-2xl' />
						<span className='w-[80%] text-lg'>
							SUNDAY60URSE%
						</span>
						<FaCheckCircle className='text-2xl text-green-500' />
					</div>
					<span className='text-sm text-primary-500 mt-2'>
						You saved 60% on this purchase,
						Hoorayy!
					</span>
					<div className='bg-white dark:bg-dark-black-900 rounded-2xl py-6 px-4 mt-5 '>
						<table className='w-full'>
							<tbody className='w-full border-b border-b-dark-black-200 text-dark-black-600 text-base capitalize [&>tr>td]:pb-5 [&>tr>td:nth-child(2)]:text-right [&>tr>td:nth-child(2)]:text-lg'>
								<tr>
									<td>subtotal</td>
									<td>$59</td>
								</tr>
								<tr>
									<td>Discount (40%)</td>
									<td className='text-green-500'>
										$23.6
									</td>
								</tr>
								<tr>
									<td>
										Service Fee (2.5% +
										$0.5)
									</td>
									<td>$1.9</td>
								</tr>
							</tbody>
							<tfoot className='w-full capitalize [&>tr>td]:pt-5'>
								<tr>
									<td>total</td>
									<td className='text-2xl text-right'>
										$37.3
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
					<div className='flex gap-3 items-center my-5'>
						<div>
							<input
								type='checkbox'
								name=''
								className='checkbox '
							/>
						</div>

						<p className='[&>a]:text-primary-500'>
							By clicking this, you are agree
							to our{' '}
							<a href='#'>
								Terms of Services
							</a>{' '}
							and{' '}
							<a href='#'>Privacy Policy</a>.
						</p>
					</div>
					<button className='p-4 rounded-2xl w-full text-white capitalize mt-auto bg-primary-500'>
						pay
					</button>
				</section>
			</section>
		</main>
	);
};
