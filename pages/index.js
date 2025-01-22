import { useEffect } from 'react';

import Layout from '../components/Layout';
import Intro from '../components/Intro';
import Work from '../components/Work';
import About from '../components/About';
import Contact from '../components/Contact';

function Home() {
	const handleScroll = (event) => {
		event.preventDefault();

		const sections = document.querySelectorAll('section');

		const scrollPosition = window.scrollY; // Current scroll position
		const viewportHeight = window.innerHeight;

		// Find the index of the current section
		const currentSectionIndex = Math.round(scrollPosition / viewportHeight);

		// Determine the scroll direction
		const deltaY = event.deltaY;

		let nextSectionIndex = currentSectionIndex;

		if (deltaY > 0 && currentSectionIndex < sections.length - 1) {
			nextSectionIndex++; // Scroll down
		} else if (deltaY < 0 && currentSectionIndex > 0) {
			nextSectionIndex--; // Scroll up
		}

		// If there's a valid next section, scroll to it
		if (nextSectionIndex !== currentSectionIndex) {
			const targetPosition = nextSectionIndex * viewportHeight;
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth',
			});
		}
	};


	useEffect(() => {
		// Attach the wheel event listener
		window.addEventListener('wheel', handleScroll, { passive: false });

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener('wheel', handleScroll);
		};
	}, []);

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
