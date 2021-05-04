import Sticker from './Sticker';

const Intro = () => {
	return (
		<section className="relative">
			<div className="absolute top-0 left-0 w-full h-screen-minus-header flex justify-between">
				<Sticker color="mint" width="1/6" height="2/6" pos="center" />
				
				<div className="container lg:min-w-1/2 self-center lg:pl-28">
					<h2 className="w-full md:w-1/2 lg:w-1/3 text-2xl font-light tracking-tight antialiased">A New York City-based web developer, with a passion for design, performance and collaboration.</h2>
				</div>

				<Sticker color="baige" width="2/6" height="2/6" pos="end" />
			</div>
		</section>
	)
};

export default Intro;
