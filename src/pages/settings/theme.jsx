import Wtheme from '../../assets/theme/ContentW.png';
import Btheme from '../../assets/theme/Content.png';

export let Theme = () => {
	return (
		<main>
			<div className='mt-7'>
				<h4>select theme</h4>
				<p className='text-dark-black-500 text-sm mt-3'>
					Customizing your workspace, make it more enjoyable and
					comfortable to study!
				</p>
			</div>
			<div className='flex flex-col md:flex-row justify-between items-center gap-5 [&>div]:w-full'>
				<div className='border-2 border-primary-500 dark:border-dark-black-300  mt-5 rounded-2xl'>
					<div className='p-8 rounded-t-2xl  bg-dark-black-600 w-full'>
						<img src={Wtheme} className='w-full' />
					</div>
                    <div className='p-5 flex items-center gap-5'>
                        <div className='w-7 h-7 flex-center rounded-full bg-primary-500 dark:bg-transparent dark:border-2'>
                            <div className='w-4 h-4 bg-white dark:bg-dark-black-900 rounded-full'></div>
                        </div>
                        <h4>white theme</h4>
                    </div>
				</div>
				<div className='border-2 dark:border-primary-500 border-dark-black-300 mt-5 rounded-2xl'>
					<div className='p-8  rounded-t-2xl   bg-dark-black-600 w-full'>
						<img src={Btheme} className='w-full' />
					</div>
                    <div className='p-5 flex items-center gap-5'>
                        <div className='w-7 h-7 flex-center rounded-full dark:bg-primary-500 border-2'>
                            <div className='w-4 h-4 bg-white dark:bg-dark-black-900 rounded-full'></div>
                        </div>
                        <h4>dark theme</h4>
                    </div>
				</div>
			</div>
		</main>
	);
};
