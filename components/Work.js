import WorkItem from './WorkItem';
import { work } from '../data';

const Work = () => {
	const renderProjects = (project, i) => {
		return <WorkItem project={project} key={i} />;
	};

	return (
		<section className="h-screen flex items-center">
			<div className="container">
				<h3 className="mb-30px text-36px font-bold uppercase underline tracking-tight antialiased">Work</h3>
				<ul>
					{work.map(renderProjects)}
				</ul>
			</div>
		</section>
	)
};

export default Work;
