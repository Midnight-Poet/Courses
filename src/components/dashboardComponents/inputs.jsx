export let Inputs = (params) => {
	return (
		<div className={`${params.width} mt-5`}>
			<label htmlFor='name' className='flex-between'>
				{params.title}
				<span className='text-sm text-dark-black-400 font-normal'>
					*Required
				</span>
			</label>
			<input
				type={params.type}
				name={params.name}
				className={`w-full py-3 px-4 rounded-lg bg-dark-black-100 dark:bg-dark-black-868 my-2`}
			/>
		</div>
	);
};
