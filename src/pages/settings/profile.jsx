import profile from '../../assets/profile/Profile.png';
import { LuCloudUpload } from 'react-icons/lu';

export let Profile = () => {
	return (
		<main>
			<h4>edit profile</h4>
			<div className='mt-7 md:pb-8 md:border-b flex flex-col md:flex-row items-start justify-between'>
				<div className=''>
					<h5>Public Profile</h5>
					<p className='text-dark-black-500 text-sm mt-3'>
						This will be displayed on your profile
					</p>
				</div>
				<div className='[&>input]:border [&>input]:dark:border-transparent [&>input]:dark:bg-dark-black-868 [&>input]:mt-2 [&>input]:border-dark-black-400 [&>input]:rounded-[8px] [&>input]:py-3 [&>input]:px-4 [&>input]:w-full'>
					<input type='text' name='' id='' />
					<input type='text' name='' id='' />
				</div>
			</div>
			<div className='mt-8 md:pb-8 md:border-b flex flex-col md:flex-row items-start justify-between'>
				<div>
					<h5>Profile Picture</h5>
					<p className='text-dark-black-500 text-sm mt-3'>
						Choose your best picture that represent you
					</p>
				</div>
				<div className='flex-between md:w-[50%] md:gap-4 mt-6 md:m-0'>
					<img src={profile} className='' />
					<div className='w-[70%] md:w-fit py-3 px-4 border rounded-[8px]'>
						<div className='flex-center text-4xl'>
							<LuCloudUpload />
						</div>
						<p className='text-sm text-center mt-3'>
							Click to upload{' '}
							<span className='text-dark-black-400'>
								{' '}
								or drag and drop SVG, PNG, JPG, or GIF (max
								800x400px)
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className='mt-5 md:pb-8 flex flex-col md:flex-row items-start justify-between'>
				<div>
					<h5>Social Profile</h5>
					<p className='text-dark-black-500 text-sm mt-3'>
						This also will displayed on your profile
					</p>
				</div>

				<div className='w-3/5'>
					<div className='flex w-full rounded-[8px] border mt-2 dark:bg-dark-black-868'>
						<p className='border-r py-3 px-4 text-dark-black-600 dark:text-white dark:bg-dark-black-800'>
							twitter.com/
						</p>
						<input
							type='text'
							className='outline-none w-[70%] py-3 px-4'
							id=''
						/>
					</div>
					<div className='flex w-full rounded-[8px] border mt-2 dark:bg-dark-black-868'>
						<p className='border-r py-3 px-4 text-dark-black-600 dark:text-white dark:bg-dark-black-800'>
							instagram.com/
						</p>
						<input
							type='text'
							className='outline-none w-[70%] py-3 px-4'
							id=''
						/>
					</div>
					<div className='flex w-full rounded-[8px] border mt-2 dark:bg-dark-black-868'>
						<p className='border-r py-3 px-4 text-dark-black-600 dark:text-white dark:bg-dark-black-800'>
							linkedin.com/
						</p>
						<input
							type='text'
							className='outline-none w-[70%] py-3 px-4'
							id=''
						/>
					</div>
					<div className='flex w-full rounded-[8px] border mt-2 dark:bg-dark-black-868'>
						<p className='border-r py-3 px-4 text-dark-black-600 dark:text-white dark:bg-dark-black-800'>
							facebook.com/
						</p>
						<input
							type='text'
							className='outline-none w-[70%] py-3 px-4'
							id=''
						/>
					</div>
				</div>
			</div>
			<button className='dark-btn mt-5 float-right'>save changes</button>
		</main>
	);
};
