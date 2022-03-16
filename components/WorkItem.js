import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WorkItem = (props) => {
	const [hover, setHover] = useState(false);
	const { project } = props;

	const {
		title,
		stack,
		slug,
	} = project;

	const transition = {
		ease: 'easeInOut',
		duration: .4,
	};

	const onHover = useCallback(() => {
		setHover(hover => !hover);
	}, [setHover]);

	return (
		<li className="relative">
			<Link href={`/work/${slug}`}>
				<a
					onMouseEnter={onHover}
					onMouseLeave={onHover}
					className="inline-block pr-2 relative uppercase tracking-tight font-bold antialiased cursor-pointer"
				>
					<motion.div
						className="absolute top-0 left-0 bg-mint w-0 h-full"
						animate={{ width: hover ? '100%' : 0 }}
						transition={transition}
					/>
					<motion.div
						className="w-0 absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center h-1/2 z-3 overflow-hidden"
						animate={{ width: hover ? 'auto' : 0 }}
						transition={transition}
					>
						<div className="absolute bg-black w-full h-full px-2" />
						<motion.span className="relative px-2 z-3 normal-case font-normal text-15px text-white whitespace-nowrap">
							{stack}
						</motion.span>
					</motion.div>
					<span className="text-24px lg:text-36px relative z-2">{title}</span>
				</a>
			</Link>
		</li>
	)
};

export default WorkItem;
