import React from 'react'

const Navbar = () => {
	return (
		<header className='w-full sticky top-0 backdrop-blur-lg z-50'>
			<nav className='w-full max-w-7xl mx-auto sm:px-16 px-6 py-4 flex justify-between items-center'>
				<div>
					<h1 className='font-bold text-xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
						Summarizer
					</h1>
				</div>

				<button
					type='button'
					className='rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:bg-gradient-to-r hover:from-amber-500 hover:via-orange-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent hover:border-transparent'
					onClick={() => window.open('https://www.github.com/anoopraju31')}>
					GitHub
				</button>
			</nav>
		</header>
	)
}

export default Navbar
