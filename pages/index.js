import { useState } from 'react';
import PageContext from '../context/PageContext';
import Head from '../components/Head';
import Logo from '../components/Logo';
import MyHamburger from '../components/MyHamburger';
import Menu from '../components/Menu';
import Intro from '../components/Intro';
import Work from '../components/Work';

function Home() {
	const [navActive, setNavActive] = useState(false);

	return (
		<PageContext.Provider value={{ navActive, setNavActive }}>
			<Head title="Michael Beaujean" />
			<nav className="fixed top-0 w-full py-7 z-50">
				<div className={`container relative flex justify-between z-20 text-${navActive ? 'dark-grey' : 'white'}`}>
					<Logo />
					<MyHamburger />
				</div>
			</nav>
			
			<Menu />

			<main>
				<Intro />
				<Work />
			</main>
		</PageContext.Provider>
	)
}

export default Home;