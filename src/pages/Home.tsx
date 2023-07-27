import { Form, Hero, Summary } from '../components'

const Home = () => {
	return (
		<div className='w-full max-w-7xl min-h-screen mx-auto sm:px-16 px-6'>
			<Hero />
			<Form />
			<Summary />
		</div>
	)
}

export default Home
