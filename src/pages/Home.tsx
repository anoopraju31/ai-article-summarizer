import { useState } from 'react'
import { Form, Hero, Summary } from '../components'
import { useLazyGetSummaryQuery } from '../services/articleApi'

type article = {
	url: string
	summary: string
}

type summarizeType = (url: string) => Promise<string>

const Home = () => {
	const [article, setArticle] = useState<article>({
		url: '',
		summary: '',
	})
	const [getSummary, { error, isFetching, isError }] = useLazyGetSummaryQuery()

	const summarize: summarizeType = async (url) => {
		// setArticle((prev: article) => ({...prev, url}))
		const { data } = await getSummary({ url })
		setArticle({ url, summary: data.summary })

		return data.summary
	}

	return (
		<div className='w-full max-w-7xl min-h-screen mx-auto sm:px-16 px-6'>
			<Hero />
			<Form summarize={summarize} />
			<Summary />
		</div>
	)
}

export default Home
