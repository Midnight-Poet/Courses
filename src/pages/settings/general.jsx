// import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router';

export let General = () => {
	return (
		<main className='w-'>
			<h4>general</h4>
			<div className='mt-7'>
				<h5>personal information</h5>
				<p className='text-dark-black-500 text-sm mt-3'>
					Your personal information is strictly confidential and
					inaccessible to others. We prioritize your privacy, ensuring
					that all your personal details remain secure and private.
				</p>
			</div>
			<form action='' className='[&>div>input]:border [&>div>input]:border-dark-black-400 [&>div>input]:rounded-[8px] [&>div>input]:py-3 [&>div>input]:px-4 [&>div>input]:w-full [&>div>input]:dark:border-transparent [&>div>input]:dark:bg-dark-black-868'>
				<div className='flex flex-col md:flex-row items-center just0fy-between gap-2 capitalize mt-5'>
					<label htmlFor='' className='w-[30%]'>name</label>
					<input type='text' name='' id='' />
				</div>
				<div className='flex flex-col md:flex-row items-center just0fy-between gap-2 capitalize mt-5'>
					<label htmlFor='' className='w-[30%]'>phone number</label>
					<input type='number' name='' id='' />
				</div>
				<div className='flex flex-col md:flex-row items-center just0fy-between gap-2 capitalize mt-5'>
					<label htmlFor='' className='w-[30%]'>date of birth</label>
					<input type='date' name='' id='' />
				</div>
			</form>
			<div className='mt-7'>
				<h5>message settings</h5>
				<p className='text-dark-black-500 text-sm mt-2'>
					Set your preferences for clear and accessible messages that
					can be shared with everyone.
				</p>
				<div className='mt-5'>
					<div>
						<h5>Show read receipt</h5>
						<p className='text-dark-black-500 text-sm mt-2'>
							Let people you’re messaging with know when you’ve
							seen their messages.
						</p>
					</div>
					<div></div>
				</div>

				<div className='mt-5'>
					<div>
						<h5>Allow message for everyone</h5>
						<p className='text-dark-black-500 text-sm mt-2'>
							Every member of Course group is welcome to chat with
							you anytime.
						</p>
					</div>
					<div></div>
				</div>
                <div className='mt-7 text-red-500'>
                    <Link>Delete account</Link>
                </div>
                <button className="dark-btn mt-5 float-right">save changes</button>
			</div>
		</main>
	);
};
