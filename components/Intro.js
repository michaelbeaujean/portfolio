import Sticker from './Sticker';
import { intro } from '../data';

const Intro = () => {
	return (
		<section className="h-screen">
			<div className="h-full flex justify-between">
				<Sticker color="mint" width="1/6" height="2/6" pos="center" />
				<div className="container flex items-center">
					<div className="lg:min-w-1/2 lg:pl-28">
						<h2 className="w-full md:w-1/2 lg:w-1/3 text-2xl font-light tracking-tight antialiased">
							{intro}
						</h2>
					</div>
				</div>
				<Sticker color="baige" width="2/6" height="2/6" pos="end" />
			</div>
		</section>
	)
};

export default Intro;
