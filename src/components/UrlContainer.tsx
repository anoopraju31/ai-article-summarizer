import { GoCopy } from 'react-icons/go'

const UrlContainer = () => {
	return (
		<div className='group py-2 px-3 flex justify-start items-center flex-row gap-5 bg-white rounded-lg cursor-pointer hover:bg-transparent hover:text-gray-700 hover:shadow-sm transition-all duration-1000'>
			<p className='flex-1 font-serif text-gray-600 group-hover:text-orange-400 font-medium text-sm truncate transition-colors duration-1000'>
				https://www.youtube.com/watch?v=PawdNhhDr4kfjwighwi0gh0wrherjiphhjepjhphj
			</p>

			<div className='w-7 h-7 bg-gray-50 group-hover:bg-white rounded-full backdrop-blur cursor-pointer'>
				<div className='w-full h-full flex justify-center items-center rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-1000'>
					<GoCopy />
				</div>
			</div>
		</div>
	)
}

export default UrlContainer
