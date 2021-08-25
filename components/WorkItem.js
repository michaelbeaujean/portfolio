import { motion } from 'framer-motion';

const WorkItem = (props) => {
	const { project } = props;

	const {
		name,
		stack,
	} = project;

	const transition = {
		ease: 'easeInOut',
		duration: .4,
	};

	const bgVariants = {
		hoverOff: {
			width: 0,
		},
		hoverOn: {
			width: '100%',
		},
	};

	const stackContainerVariants = {
		hoverOff: {
			width: 0,
		},
		hoverOn: {
			width: 'auto',
		},
	};

	return (
		<li className="relative">
			<motion.a href="#" whileHover="hoverOn" className="inline-block pr-2 relative uppercase tracking-tight font-bold antialiased">
				<motion.div
					className="absolute top-0 left-0 bg-mint w-full h-full"
					initial="hoverOff"
					variants={bgVariants}
					transition={transition}
				/>
				<motion.div
					className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center h-1/2 z-3 overflow-hidden"
					initial="hoverOff"
					variants={stackContainerVariants}
					transition={transition}
				>
					<div className="absolute bg-black w-full h-full px-2"></div>
					<motion.span className="relative px-2 z-3 normal-case font-normal text-15px text-white whitespace-nowrap">
						{stack}
					</motion.span>
				</motion.div>
				<span className="text-24px lg:text-36px relative z-2">{name}</span>
			</motion.a>
		</li>
	)
};

export default WorkItem;
