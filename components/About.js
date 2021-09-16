import Image from 'next/image';
import Sticker from './Sticker';
import { about } from '../data';
import headshot from '../public/me.jpg';

const About = () => {
	const {
		bio,
	} = about;

	const renderBio = (paragraph, i) => {
		return <p key={i} className="text-lg leading-tight tracking-tight antialiased mb-4">{paragraph}</p>
	};

	return (
		<section className="relative h-screen mb-1/2-screen md:mb-0 flex items-center">
			<Sticker color="light-cherry" width="1/6" height="2/6" pos="start" />
			<div className="container">
				<h3 className="xl:pl-108px mb-30px text-36px font-extrabold uppercase underline tracking-tight antialiased">About</h3>
				<div className="flex flex-col lg:flex-row">
					<div className="lg:pl-8 lg:ml-auto lg:order-2 pb-4 lg:pb-0">
						<Image src={headshot} alt="A headshot photo of me" width="414" height="510" />
					</div>
					<div className="xl:pl-108px xl:min-w-516 lg:w-1/2 xl:w-1/3 lg:order-1">
						{bio.map(renderBio)}
					</div>
				</div>
			</div>
			<Sticker color="mint" width="1/6" height="2/6" pos="end" />
		</section>
	)
};

export default About;
