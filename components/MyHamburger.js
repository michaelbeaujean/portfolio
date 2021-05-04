import { useContext } from 'react';
import PageContext from '../context/PageContext';
import Hamburger from 'hamburger-react';

const MyHamburger = () => {
	const {
		navActive,
		setNavActive,
	} = useContext(PageContext);

	const onToggle = () => {
		setNavActive(!navActive);
	}

	return (
		<div className="self-center text-0">
			<Hamburger onToggle={onToggle} />
		</div>
	)
};

export default MyHamburger;
