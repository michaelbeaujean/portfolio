import { useContext } from 'react';
import UnderlineHover from '../components/UnderlineHover';
import PageContext from '../context/PageContext';
import { motion } from 'framer-motion';
import { menu } from '../data';
import Link from 'next/link';

const Menu = () => {
	const { navActive, setNavActive } = useContext(PageContext);

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

	const onClick = (e) => {
		setNavActive(false);

		if (window.location.pathname === '/') {
			const href = e.currentTarget.getAttribute('href');
			const section = document.querySelector(href.replace('/', ''));
			const headerHeight = section.offsetHeight > window.innerHeight ? 108 : 0;
			const elPos = section.getBoundingClientRect().top;
			const offset = elPos + window.pageYOffset - headerHeight;
	
			window.scrollTo({ top: offset });
		}
	}

	const renderMenuItems = (menuItem, i) => {
		const {
			slug,
			title,
		} = menuItem;

		return (
			<li className="mb-2" key={i}>
				<Link href={`/#${slug}`}>
					<a className="group inline-block text-4xl font-bold text-dark-grey uppercase tracking-tight leading-none" onClick={onClick}>
						{title}
						<UnderlineHover color="bg-dark-grey" />
					</a>
				</Link>
			</li>
		)
	}

	return (
		<motion.div
			className="fixed top-0 left-0 w-full h-0 z-10 bg-white transform origin-top flex flex-col justify-center overflow-hidden"
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
