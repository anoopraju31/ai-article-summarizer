import { useState } from 'react'
import { GoCopy } from 'react-icons/go'
import { TiTick } from 'react-icons/ti'
import { IoCloseOutline } from 'react-icons/io5'
import { useAppDispatch } from '../hooks'
import { addSummary, addUrl } from '../services/article'

interface article {
	url: string
	summary: string
}

type UrlContainerProps = {
	item: article
	remove: (item: article) => void
}

const UrlContainer = ({ item, remove }: UrlContainerProps) => {
	const [copied, setCopied] = useState<string>('')
	const dispatch = useAppDispatch()

	const handleClick = () => {
		dispatch(addUrl(item.url))
		dispatch(addSummary(item.summary))
	}

	const handleCopy = (copyUrl: string) => {
		setCopied(copyUrl)
		navigator.clipboard.writeText(copyUrl)
		setTimeout(() => setCopied(''), 3000)
	}

	return (
		<div
			onClick={handleClick}
			className='group py-2 px-3 flex justify-start items-center flex-row gap-5 bg-white rounded-lg cursor-pointer hover:bg-slate-800/10 hover:text-gray-700 hover:shadow-sm transition-all duration-1000'>
			<div className='w-7 h-7 bg-gray-50 group-hover:bg-white/20 rounded-full backdrop-blur cursor-pointer'>
				<div
					onClick={() => handleCopy(item.url)}
					className='w-full h-full flex justify-center items-center rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-1000'>
					{copied !== item.url ? <GoCopy /> : <TiTick />}
				</div>
			</div>

			<p className='flex-1 font-serif text-gray-600 group-hover:text-orange-400 font-medium text-sm truncate transition-colors duration-1000'>
				{item.url}
			</p>

			<div className='w-7 h-7 bg-gray-50 group-hover:bg-white/20 rounded-full backdrop-blur cursor-pointer'>
				<div
					onClick={() => remove(item)}
					className='w-full h-full flex justify-center items-center rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-1000'>
					<IoCloseOutline />
				</div>
			</div>
		</div>
	)
}

export default UrlContainer
