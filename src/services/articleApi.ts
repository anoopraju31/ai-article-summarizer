import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api_key: string =
	process.env.REACT_APP_RAPID_API_ARTICLE_KEY?.toString() || ''

export const articleApi = createApi({
	reducerPath: 'articleApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com',
		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', api_key)
			headers.set(
				'X-RapidAPI-Host',
				'article-extractor-and-summarizer.p.rapidapi.com',
			)
			return headers
		},
	}),
	endpoints: (builder) => ({
		getSummary: builder.query({
			query: (params) =>
				`/summarize?url=${encodeURIComponent(params.url)}&length=5`,
		}),
	}),
})

export const { useLazyGetSummaryQuery } = articleApi
