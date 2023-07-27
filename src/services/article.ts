import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

const initialState = {
	url: '',
	summary: '',
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {
		addUrl: (state, action: PayloadAction<string>) => {
			state.url = action.payload
		},
		addSummary: (state, action: PayloadAction<string>) => {
			state.summary = action.payload
		},
	},
})

export const { addUrl, addSummary } = articleSlice.actions
export default articleSlice.reducer
