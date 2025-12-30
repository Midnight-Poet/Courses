export let Notification = () => {
	return (
		<main>
			<h4>notification</h4>
			<div>
				<div className='mt-8 md:border-b md:pb-8'>
					<div>
						<h5>Push Notification</h5>
						<p className='text-dark-black-500 text-sm mt-3'>
							Receive push notifications to stay updated on
							activities even when you're away from Courses. You
							have the flexibility to disable them at any time.
							This preference applies to any account accessed
							through this browser.
						</p>
					</div>
					<div></div>
				</div>

				<div className='mt-8'>
					<div>
						<h5>email Notification</h5>
						<p className='text-dark-black-500 text-sm mt-3'>
							Get emails to find out what’s going on when you’re
							not on Courses. You can turn them off anytime.
						</p>
					</div>
					<div></div>
				</div>

				<div className='mt-8'>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>messages mentions</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Reminder schedules</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Payment courses</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Courses that you might like</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Our interesting promo</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Courses Updates</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Subscription Renewal Notices</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Certification Achievements</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
					<div className='py-3 border-b mt-2 flex-between w-full'>
						<h6>Feedback Requests</h6>
						<input type='checkbox' className='checkbox' id='' />
					</div>
				</div>
				<button className='dark-btn mt-5 float-right'>
					save changes
				</button>
			</div>
		</main>
	);
};
