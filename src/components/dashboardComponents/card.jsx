import {
	createRef,
	useEffect,
	useReducer,
	useRef,
} from 'react';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';
import { Link } from 'react-router';

export let Card = (params) => {
	return (
		<div className='bg-white dark:bg-dark-black-900 rounded-2xl p-6 w-full md:w-[48%] my-3 md:my-0'>
			<div className='flex items-center'>
				<img src={params.logo} className='py-4' />
				{params.logoName}
			</div>
			<div>
				<p className='text-base sm:text-lg '>
					{params.text}
				</p>
				<p className='text-sm my-3'>
					{params.timeTaken} hours taken
					<span className='text-dark-black-500'>
						{' '}
						/ {params.totalTime} Hours
					</span>
				</p>
			</div>
			<div className='progressbar mt-5 w-full h-[3px] bg-dark-black-500 rounded-2xl'></div>
		</div>
	);
};

// let checkbox = createRef()
export let TaskCard = (params) => {
	let checkbox = useRef();
	let border = useRef();
	useEffect(() => {
		checkbox.current.checked
			? (border.current.className +=
					' border-primary-500')
			: null;
	});

	return (
		<div
			className='w-full flex items-center justify-between bg-white dark:bg-dark-black-900 py-4 px-3 my-4 rounded-[18px] border '
			ref={border}
		>
			<div className='w-[52px] h-[52px] p-0.5 bg-primary-50 dark:bg-dark-black-800 dark:text-white text-primary-500 text-xl rounded-full flex items-center justify-center'>
				<PiBookOpenTextLight />
			</div>
			<div className='w-[65%] sm:w-[80%]'>
				<p className='text-base leading-[180%]'>
					Learn a new part
				</p>
				<div className='w-full sm:w-max [&>span]:mr-2 text-sm text-dark-black-500 flex items-center flex-wrap'>
					<span>{params.course}</span>
					<span className='h-2 w-2 rounded-full bg-dark-black-500'></span>
					<span>{params.tutor}</span>
					<span className='h-2 w-2 rounded-full bg-dark-black-500'></span>
					<span>{params.type}</span>
				</div>
			</div>
			<div className='flex items-center gap-2 capitalize'>
				<input
					type='checkbox'
					ref={checkbox}
					checked={params.status}
					disabled
					className='checkbox'
				/>
				done
			</div>
		</div>
	);
};

export let PriceCard = (params) => {
	return (
		<div className='p-6 rounded-2xl sm:p-4 my-4 border dark:border-dark-black-800 border-dark-black-200 sm:w-[32%] flex flex-col'>
			<div className='flex-between '>
				<span className={`text-4xl`}>
					{params.icon}
				</span>
				{params.choice ? (
					<span className='flex capitalize gap-2.5 items-center dark:bg-dark-black-800 dark:text-white bg-primary-50 text- p-2 text-xs font-semibold text-primary-500 rounded-[8px]'>
						recommended{' '}
						<SlBadge className='text-2lg' />
					</span>
				) : null}
			</div>
			<div>
				<h4>{params.header}</h4>
				<p className='text-sm text-dark-black-500'>
					{params.text}
				</p>
			</div>
			<div className='my-4'>
				<h1>
					${params.price}{' '}
					<span className='text-sm font-normal lowercase text-dark-black-500'>
						{' '}
						/ month
					</span>
				</h1>
				<p className='my-1 text-sm font-normal lowercase text-dark-black-500'>
					{params.discount} per transaction
				</p>
			</div>
			<button
				className={`p-4 rounded-2xl w-full text-white capitalize mt-auto ${
					!params.btnStatus
						? 'bg-dark-black-300 dark:bg-dark-black-800'
						: 'bg-primary-500'
				}`}
			>
				<Link to={'/checkout'}>{params.button}</Link>
			</button>
		</div>
	);
};
