import { FaAngleDown } from 'react-icons/fa6';
import { FaAngleUp } from 'react-icons/fa6';
import { FaPlay } from 'react-icons/fa6';

export let Section = (props) => {
	return (
		<div className='bg-dark-black-50 dark:bg-dark-black-846 rounded-3xl p-4 mt-5 w-full sm:w-[49%]'>
			<div>
				<div className='flex-between'>
					<div>
						<h4 className='leading-2'>{props.title}</h4>
						<p className='text-dark-black-400'>{props.listNumber} courses</p>
					</div>
					<div className='text-2xl self-start'>
						<FaAngleDown className='hidden'/>
						<FaAngleUp />
					</div>
				</div>
				<div className='mt-10'>
					{props.list.map((element) => {
						return (
							<div className='py-3 px-4 flex-between mt-3 rounded-2xl bg-primary-50 dark:bg-dark-black-800'>
								<div className='rounded-full w-fit p-2 flex-start bg-primary-500 dark:bg-white text-white dark:text-dark-black-800'>
									<FaPlay className='text-2lg-' />
								</div>
								<div className='w-7/8 ml-4'>
									<h5>{element.title}</h5>
									<p className='text-dark-black-400'>{element.duration} minutes</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
