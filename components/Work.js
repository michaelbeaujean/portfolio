import Headline from './Headline';
import WorkItem from './WorkItem';
import { workPages } from '../data';

const Work = () => {
	const renderProjects = (project, i) => {
		return <WorkItem project={project} key={i} />;
	};

	return (
		<section className="min-h-screen flex items-center md:mb-0" id="work">
			<div className="container">
				<Headline>Work</Headline>
				<ul>
					{workPages.map(renderProjects)}
				</ul>
			</div>
		</section>
	)
};

export default Work;
