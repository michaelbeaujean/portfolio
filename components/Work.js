import { work } from '../data';
import { motion } from 'framer-motion';

const Work = () => {
	const renderProjects = (project, i) => {
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

		const stackTextVariants = {
			textHide: {
				opacity: 0,
			},
			textShow: {
				opacity: 1,
			},
		}

		return (
			<li key={i}>
				<motion.a href="#" whileHover="hoverOn" className="relative text-48px uppercase tracking-tight font-bold antialiased">
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
						onAnimationComplete={() => {
							// textShow;
						}}
					>
						<div class="absolute bg-black w-full h-full px-2"></div>
						<motion.span
							className="relative px-2 z-3 normal-case font-normal text-15px text-white"
							initial="textHide"
							variants={stackTextVariants}
							transition={transition}
						>
							{stack}
						</motion.span>
					</motion.div>
					<span className="relative z-2">{name}</span>
				</motion.a>
			</li>
		)
	};

	return (
		<section className="h-screen flex items-center">
			<div className="container">
				<h3>Work</h3>
				<ul>
					{work.map(renderProjects)}
				</ul>
			</div>
		</section>
	)
};

export default Work;
