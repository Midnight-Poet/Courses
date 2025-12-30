import { FaStar } from 'react-icons/fa6';

export let Container = (props) => {
	return (
		<div className='flex flex-col p-3 rounded-2xl bg-white dark:bg-dark-black-900 mt-4'>
			<div>
				<img src={props.image} className='w-full rounded-2xl' />
			</div>
			<div>
				<div className='flex-start flex-col h-max my-5 gap-2'>
					<h5 className='font-normal'>{props.title}</h5>
					<div className=' flex-center gap-1 text-yellow-500'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
					</div>
				</div>
				<div className='flex-between mt-auto content-end'>
					<div className='flex-between gap-2'>
						<img src={props.pfp} className='w-6 rounded-full' />
                        <p className='text-sm text-dark-black-500'>{props.name}</p>
					</div>
                    <p className='text-2xl text-primary-500 font-semibold'>
                        ${props.price}
                    </p>
				</div>
			</div>
		</div>
	);
};

