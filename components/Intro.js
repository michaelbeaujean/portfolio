import Sticker from './Sticker';
import { intro } from '../data';

const Intro = () => {
	return (
		<section className="h-screen">
			<div className="h-full flex justify-between">
				<Sticker color="bg-mint" width="w-1/6" height="h-2/6" pos="self-center" />
				<div className="container flex items-center">
					<div className="lg:min-w-1/2 lg:pl-28">
						<h2 className="w-full md:w-1/2 lg:w-1/3 text-2xl font-light tracking-tight antialiased">
							{intro}
						</h2>
					</div>
				</div>
				<Sticker color="bg-baige" width="w-2/6" height="h-2/6" pos="self-end" />
			</div>
		</section>
	)
};

export default Intro;
