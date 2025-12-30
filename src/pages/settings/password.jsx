import { CiLock } from 'react-icons/ci';
import { LuEyeClosed } from 'react-icons/lu';

export let ChangePassword = () => {
	return (
		<main>
			<div className='mt-7'>
				<h4>Change Password</h4>
				<p className='text-dark-black-500 text-sm mt-3'>
					To change your password, please fill in the fields below.
					Your password must contain at least 8 characters, it must
					also include at least 1 upper case letter, one lower case
					letter, one number, and one special character.
				</p>
			</div>
			<div>
				<div className='mt-8 flex flex-col md:flex-row items-start justify-between md:gap-8'>
					<div className='w-2/5'>
						<h5>Current password</h5>
						<p className='text-dark-black-500 text-sm mt-2'>
							This will help us to verified that this is really
							you
						</p>
					</div>
					<div className='mt-2 flex items-center gap-2 py-3 px-4 border dark:bg-dark-black-868 dark:border-transparent w-3/5 rounded-[8px] text-3xl text-dark-black-400'>
						<CiLock />
						<input
							type='password'
							className='w-full outline-none text-lg text-black '
						/>
						<LuEyeClosed />
					</div>
				</div>
				<div className='mt-8 flex flex-col md:flex-row items-start justify-between md:gap-8'>
					<div className='w-2/5'>
						<h5>new password</h5>
						<p className='text-dark-black-500 text-sm mt-2'>
							Following our password guidelines will ensures a
							strong and protected login experience.
						</p>
					</div>
					<div className='mt-2 flex items-center gap-2 py-3 px-4 border dark:bg-dark-black-868 dark:border-transparent w-3/5 rounded-[8px] text-3xl text-dark-black-400'>
						<CiLock />
						<input
							type='password'
							className='w-full outline-none text-lg text-black '
						/>
						<LuEyeClosed />
					</div>
				</div>
				<div className='mt-8 flex flex-col md:flex-row items-start justify-between md:gap-8'>
					<div className='w-2/5'>
						<h5>confirm new password</h5>
						<p className='text-dark-black-500 text-sm mt-2'>
							Ensure this password matches with the previous one
						</p>
					</div>
					<div className='mt-2 flex items-center gap-2 py-3 px-4 border dark:bg-dark-black-868 dark:border-transparent w-3/5 rounded-[8px] text-3xl text-dark-black-400'>
						<CiLock />
						<input
							type='password'
							className='w-full outline-none text-lg text-black '
						/>
						<LuEyeClosed />
					</div>
				</div>
				<button className='dark-btn mt-5 float-right'>
					save changes
				</button>
			</div>
		</main>
	);
};
