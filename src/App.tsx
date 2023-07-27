import { Footer, Navbar } from './components'
import { Home } from './pages'

export default function App() {
	return (
		<main>
			<div className='main'>
				<div className='gradient' />
			</div>

			<div className='relative z-10 flex justify-center items-center flex-col'>
				<Navbar />
				<Home />
				<Footer />
			</div>
		</main>
	)
}
