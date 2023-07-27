const Footer = () => {
	return (
		<footer className='w-full max-w-7xl mx-auto sm:px-16 px-6'>
			<div className='w-full my-6 lg:my-8'>
				<hr className='mb-6 border-gray-400 lg:mb-8' />
				<span className='block text-sm text-gray-700 text-center leading-6'>
					© 2023{' '}
					<a href='/' className='hover:underline'>
						Summarize™
					</a>
					. <br className='block sm:hidden' />
					All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}

export default Footer
