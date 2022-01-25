import Sticker from '../components/Sticker';
import UnderlineHover from './UnderlineHover';
import { contact } from '../data';

const Contact = () => {
	const {
		links,
		credits,
	} = contact;

	const renderLinks = (link, i) => {
		const {
			name,
			url,
		} = link;

		return (
			<li key={i}>
				<a
					href={url}
					target="_blank"
					rel="noopener"
					className="inline-block text-24px lg:text-36px tracking-tight leading-tight font-semibold uppercase antialiased group"
				>
					{name}
					<UnderlineHover />
				</a>
			</li>
		)
	}

	return (
		<section className="flex relative items-center h-screen pb-16" id="contact">
			<Sticker color="bg-baige" width="w-1/6" height="h-1/3" pos="self-center" className="hidden md:block" />
			<div className="container">
				<div className="xl:pl-108px">
					<h3 className="mb-30px text-36px font-extrabold uppercase underline tracking-tight antialiased">Contact</h3>
					<ul>
						{links.map(renderLinks)}
					</ul>
					<div className="py-16 text-36px">-</div>
					<div className="w-3/4 text-24px lg:text-36px leading-tight tracking-tight font-semibold uppercase antialiased">
						{credits}&nbsp;
						<a href="mailto:mbeaujean88@gmail.com" className="inline-block whitespace-nowrap group">
							Michael Beaujean
							<UnderlineHover />
						</a>
					</div>
				</div>
			</div>
			<Sticker color="bg-light-cherry" width="w-1/4" height="h-2/6" pos="self-end" className="hidden md:block" />
		</section>
	)
};

export default Contact;
