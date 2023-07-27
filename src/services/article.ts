import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
	url: '',
	summary: '',
	status: '',
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
		setStatus: (state, action: PayloadAction<string>) => {
			state.status = action.payload
		},
	},
})

export const { addUrl, addSummary, setStatus } = articleSlice.actions
export default articleSlice.reducer
