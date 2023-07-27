import { Form, Hero, Summary } from '../components'
import { useAppSelector } from '../hooks'

const Home = () => {
	const summary = useAppSelector((state) => state.article.summary)
	return (
		<div className='w-full max-w-7xl min-h-screen mx-auto sm:px-16 px-6'>
			<Hero />
			<Form />
			{summary !== '' && <Summary />}
		</div>
	)
}

export default Home
