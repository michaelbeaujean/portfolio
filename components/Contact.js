import Sticker from '../components/Sticker';
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
					<div className="w-full h-1 transform scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out bg-white"></div>
				</a>
			</li>
		)
	}

	return (
		<section className="flex relative items-center h-screen pb-16">
			<Sticker color="baige" width="1/6" height="1/3" pos="center" />
			<div className="container">
				<div className="xl:pl-108px">
					<h3 className="mb-30px text-36px font-extrabold uppercase underline tracking-tight antialiased">Contact</h3>
					<ul>
						{links.map(renderLinks)}
					</ul>
					<div className="py-16 text-36px">-</div>
					<div className="w-3/4 text-24px lg:text-36px leading-tight tracking-tight font-semibold uppercase antialiased">
						{credits}&nbsp;
						<span className="whitespace-nowrap">Michael Beaujean</span>
					</div>
				</div>
			</div>
			<Sticker color="light-cherry" width="1/4" height="2/6" pos="end" />
		</section>
	)
};

export default Contact;
