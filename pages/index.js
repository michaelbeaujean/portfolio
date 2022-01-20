import Layout from '../components/Layout'
import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
	return (
		<Layout>
			<main>
				<Intro />
				<Work />
				<About />
				<Contact />
			</main>
		</Layout>
	)
}

export default Home;
