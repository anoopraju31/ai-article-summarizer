import { configureStore } from '@reduxjs/toolkit'
import { articleApi } from './articleApi'
import articleReducer from './article'

export const store = configureStore({
	reducer: {
		article: articleReducer,
		[articleApi.reducerPath]: articleApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(articleApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
