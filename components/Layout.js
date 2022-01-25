import { useState } from 'react';
import ScrollLock from 'react-scrolllock';
import PageContext from '../context/PageContext';
import Head from '../components/Head';
import Logo from '../components/Logo';
import MyHamburger from '../components/MyHamburger';
import Menu from '../components/Menu';

const Layout = (props) => {
	const [navActive, setNavActive] = useState(false);
	const { children, title } = props;

	return (
		<PageContext.Provider value={{ navActive, setNavActive }}>
			<Head title={title ? `${title} - Michael Beaujean` : 'Michael Beaujean - New York City-based Web Developer'} />
			<nav className="fixed top-0 w-full py-7 z-50">
				<div className={`container relative flex justify-between z-20 text-${navActive ? 'dark-grey' : 'white'}`}>
					<Logo />
					<MyHamburger />
				</div>
			</nav>
			<Menu />
			<ScrollLock isActive={navActive}>
				{children}
			</ScrollLock>
		</PageContext.Provider>
	)
}

export default Layout;
