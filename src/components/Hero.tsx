import React from 'react'
import { motion } from 'framer-motion'
import { showUp } from '../utills/animations'

const Hero = () => {
	return (
		<section className='w-full py-12 flex justify-center items-center flex-col'>
			<motion.h1
				variants={showUp}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				transition={{ duration: 1 }}
				className='md:mt-10 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
				{' '}
				Summerize Articles with
				<br className='max-md:hidden' />
				<span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>
					{' '}
					OpenAI GPT-4{' '}
				</span>
			</motion.h1>

			<motion.h2
				variants={showUp}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				transition={{ duration: 1, delay: 0.1 }}
				className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
				Simplify your reading with Summize, an open-source article summarizer
				that transforms lengthy articles into clear and concise summaries
			</motion.h2>
		</section>
	)
}

export default Hero
