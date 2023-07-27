import { BiSearch } from 'react-icons/bi'

const Form = () => {
	return (
		<section className='w-full max-w-7xl flex justify-center items-center gap-2'>
			<div className='mb-16 w-full max-w-xl'>
				<form className='relative flex justify-center items-center'>
					<div className='absolute left-0 my-2 ml-3 w-5'>
						<BiSearch />
					</div>

					<input
						type='url'
						placeholder='Enter a URL'
						required
						className='block w-full rounded-md  bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:outline-none peer'
					/>

					<button
						type='submit'
						className='hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-lg font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:bg-gray-700 peer-focus:text-white '>
						{' '}
						<p className='leading-none'>↵</p>{' '}
					</button>
				</form>
			</div>
		</section>
	)
}

export default Form
