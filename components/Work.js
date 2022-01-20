import WorkItem from './WorkItem';
import { workPages } from '../data';

const Work = () => {
	const renderProjects = (project, i) => {
		return <WorkItem project={project} key={i} />;
	};

	return (
		<section className="min-h-screen flex items-center md:mb-0" id="work">
			<div className="container">
				<h3 className="mb-30px text-36px font-extrabold uppercase underline tracking-tight antialiased">Work</h3>
				<ul>
					{workPages.map(renderProjects)}
				</ul>
			</div>
		</section>
	)
};

export default Work;
