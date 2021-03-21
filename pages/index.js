import { useState } from 'react';
import PageContext from '../context/PageContext';
import Head from '../components/Head';
import Logo from '../components/Logo';
import MyHamburger from '../components/MyHamburger';
import Menu from '../components/Menu';

function Home() {
	const [navActive, setNavActive] = useState(false);

	return (
		<PageContext.Provider value={{ navActive, setNavActive }}>
			<Head title="Michael Beaujean" />

			<nav className="py-7">
				<div className={`container relative flex justify-between z-10 text-${navActive ? 'dark-grey' : 'white'}`}>
					<Logo />
					<MyHamburger />
				</div>
				<Menu />
			</nav>

			<main>
				<div className="container">
					<h1>
						Portfolio
					</h1>
				</div>
			</main>
		</PageContext.Provider>
	)
}

export default Home;