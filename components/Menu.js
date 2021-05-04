import { useContext } from 'react';
import PageContext from '../context/PageContext';
import { motion } from 'framer-motion';
import { menu } from '../data';

const Menu = () => {
	const { navActive } = useContext(PageContext);

	const variants = {
		hidden: {
			height: '0px',
		},
		visible: {
			height: '100%',
		}
	};

	const transition = {
		ease: 'easeOut',
		duration: .4,
	};

	const renderMenuItems = (menuItem, i) => {
		const {
			slug,
			title,
		} = menuItem;

		return (
			<li className="mb-2" key={i}>
				<a href={`#${slug}`} className="group inline-block text-4xl font-bold text-dark-grey uppercase tracking-tight">
					{title}
					<div className="w-full h-1 transform scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out bg-dark-grey"></div>
				</a>
			</li>
		)
	}

	return (
		<motion.div
			className="absolute top-0 left-0 w-full h-0 z-10 bg-white transform origin-top flex flex-col justify-center"
			initial="hidden"
			animate={navActive ? 'visible' : 'hidden'}
			variants={variants}
			transition={transition}
		>
			{menu && (
				<ul className="self-center text-center">
					{menu.map(renderMenuItems)}
				</ul>
			)}
		</motion.div>
	)
};

export default Menu;
