import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ParallaxLayer } from './utils/ParallaxLayer';

const Sticker = props => {
	const {
		color,
		width,
		height,
		pos,
		className,
	} = props;

	const [yPos, setYPos] = useState(0);
	const sticker = useRef(null);

	useEffect(() => {
		const { current } = sticker;
		const { y, top } = current.getBoundingClientRect();
	

		const onScroll = () => {
			console.log(window.scrollY);
		};

		window.addEventListener('scroll', onScroll);
	}, [sticker]);

	return <motion.div className={`bg-${color} w-${width} h-${height} self-${pos} ${pos === 'end' ? 'mt-24' : ''} ${className}`} style={{ y: yPos }} ref={sticker}></motion.div>;
}

export default Sticker;
