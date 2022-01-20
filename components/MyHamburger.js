import { useContext } from 'react';
import PageContext from '../context/PageContext';
import Hamburger from 'hamburger-react';

const MyHamburger = () => {
	const {
		navActive,
		setNavActive,
	} = useContext(PageContext);

	return (
		<div className="self-center text-0">
			<Hamburger toggled={navActive} toggle={setNavActive} />
		</div>
	)
};

export default MyHamburger;
