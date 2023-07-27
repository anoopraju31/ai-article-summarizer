import React, { useEffect, useState, useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { motion } from 'framer-motion'
import UrlContainer from './UrlContainer'
import { useAppDispatch } from '../hooks'
import { useLazyGetSummaryQuery } from '../services/articleApi'
import { addSummary, addUrl, setStatus } from '../services/article'
import { showScaleUp } from '../utills/animations'

type article = {
	url: string
	summary: string
}

const Form = () => {
	const urlInputRef = useRef<HTMLInputElement>(null)
	const [allArticles, setAllArticles] = useState<article[]>([])
	const dispatch = useAppDispatch()

	const [getSummary, { isFetching, error, isSuccess }] =
		useLazyGetSummaryQuery()

	useEffect(() => {
		const temp: string | null = localStorage.getItem('articles')

		if (temp) {
			const articlesFromLocalStorage: article[] = JSON.parse(temp)
			setAllArticles(articlesFromLocalStorage)
		}
	}, [])

	useEffect(() => {
		if (isFetching) {
			dispatch(setStatus('fetching'))
		}

		if (error) {
			dispatch(setStatus('error'))
		}

		if (isSuccess) dispatch(setStatus('success'))
	}, [isFetching, error, isSuccess, dispatch])

	// submit url to summarize
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (urlInputRef.current) {
			let url: string = urlInputRef.current.value
			const { data } = await getSummary({ url })

			if (data) {
				dispatch(addUrl(url))
				dispatch(addSummary(data.summary))

				const updatedArticles = [...allArticles, { url, summary: data.summary }]
				setAllArticles(updatedArticles)

				localStorage.setItem('articles', JSON.stringify(updatedArticles))
				urlInputRef.current.value = ''
			}
		}
	}

	const removeItemfromStorage = (item: article) => {
		const filteredArticles = allArticles.filter(
			(article) => article.url !== item.url,
		)
		setAllArticles(filteredArticles)
		localStorage.setItem('articles', JSON.stringify(filteredArticles))
	}

	return (
		<motion.section
			variants={showScaleUp}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			transition={{ duration: 1, delay: 0.2 }}
			className='w-full max-w-7xl flex justify-center items-center gap-2 -z-10'>
			<div className='mb-16 w-full max-w-xl'>
				<form
					// variants={showScaleUp}
					// initial='initial'
					// whileInView='animate'
					// viewport={{ once: true }}
					// transition={{ duration: 1, delay: 0.4 }}
					onSubmit={handleSubmit}
					className='relative flex justify-center items-center'>
					<div className='absolute left-0 my-2 ml-3 w-5'>
						<BiSearch />
					</div>
					{/* Url Input */}
					<input
						type='url'
						placeholder='Enter a URL'
						ref={urlInputRef}
						required
						className='block w-full rounded-md  bg-white py-3 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:outline-none peer'
					/>

					<button
						type='submit'
						className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-lg font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:bg-gray-700 peer-focus:text-white transition-all duration-1000'>
						<p className='leading-none'> ↵ </p>
					</button>
				</form>

				{/* Url History */}
				<div className='max-h-60 mt-2 flex flex-col gap-2 overflow-y-auto history'>
					{allArticles?.map((article, idx) => (
						<UrlContainer
							key={idx}
							item={article}
							remove={removeItemfromStorage}
						/>
					))}
				</div>
			</div>
		</motion.section>
	)
}

export default Form
