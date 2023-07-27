import React from 'react'

const Navbar = () => {
	return (
		<header className='w-full sticky top-0 backdrop-blur-lg'>
			<nav className='w-full max-w-7xl mx-auto sm:px-16 px-6 py-4 flex justify-between items-center'>
				<div>
					<h1 className='font-bold text-xl'> Summarize </h1>
				</div>

				<button
					type='button'
					className='rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'
					onClick={() => window.open('https://www.github.com/anoopraju31')}>
					GitHub
				</button>
			</nav>
		</header>
	)
}

export default Navbar
