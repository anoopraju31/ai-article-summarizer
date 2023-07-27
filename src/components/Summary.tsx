import React from 'react'
import { useAppSelector } from '../hooks'
import { useLazyGetSummaryQuery } from '../services/articleApi'
import { Loader } from './'

const Summary = () => {
	const summary = useAppSelector((state) => state.article.summary)
	const [, { error, isFetching }] = useLazyGetSummaryQuery()

	return (
		<section className='w-full max-w-7xl flex justify-center items-center'>
			{isFetching ? (
				<Loader />
			) : error ? (
				<p className='font-inter font-bold text-black text-center'>
					Well, that wasn't supposed to happen...
					<br />
					{/* <span className='font-satoshi font-normal text-gray-700'>
							{error?.data?.error}
						</span> */}
				</p>
			) : (
				<div className='flex flex-col gap-3'>
					<h2 className='mb-2 font-satoshi font-bold text-center text-gray-700 text-xl'>
						Article{' '}
						<span className='font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
							Summary
						</span>
					</h2>
					<div className='p-4 md:px-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'>
						<p className='font-inter font-medium text-sm text-gray-700'>
							{summary}
						</p>
					</div>
				</div>
			)}
		</section>
	)
}

export default Summary
