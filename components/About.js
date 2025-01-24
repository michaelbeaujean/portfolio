import Headline from './Headline';
import Sticker from './Sticker';
import { about } from '../data';
import headshot from '../public/me.jpg';

const About = () => {
	const {
		bio,
	} = about;

	const renderBio = (paragraph, i) => {
		return <p key={i} className="text-lg leading-tight tracking-tight antialiased mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
	};

	return (
		<section className="relative min-h-screen md:h-screen mb-108px md:mb-0 flex md:items-center" id="about">
			<Sticker color="bg-light-cherry" width="w-1/6" height="h-2/6" pos="self-start" className="hidden md:block" />
			<div className="container pt-108px lg:pt-0">
				<Headline className="xl:ml-108px">About</Headline>
				<div className="flex flex-col lg:flex-row">
					<div className="lg:pl-8 lg:ml-auto lg:order-2 pb-4 lg:pb-0">
						<img src={headshot} alt="A headshot photo of me" />
					</div>
					<div className="xl:pl-108px xl:min-w-516 lg:w-1/2 xl:w-1/3 lg:order-1">
						{bio.map(renderBio)}
					</div>
				</div>
			</div>
			<Sticker color="bg-mint" width="w-1/6" height="h-2/6" pos="self-end" className="hidden md:block" />
		</section>
	)
};

export default About;
