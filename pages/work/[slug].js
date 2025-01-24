import React from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import Layout from '../../components/Layout';
import ConditionalWrapper from '../../components/ConditionalWrapper';
import Sticker from '../../components/Sticker';
import UnderlineHover from '../../components/UnderlineHover';
import externalLinkIcon from '../../public/external-link.svg';
import { getAllWorkSlugs, getWorkPageData } from '../../lib/work';

export async function getStaticPaths() {
	const paths = getAllWorkSlugs();

	return {
		paths,
		fallback: false,
	}
};

export function getStaticProps({ params }) {
	const { slug } = params;
	const workPageData = getWorkPageData(slug);

	return {
		props: {
			workPageData
		}
	}
}

const Work = ({ workPageData }) => {
	const {
		title,
		description,
		link,
		vimeoId,
		slug,
	} = workPageData.workPage;

	return (
		<Layout title={title}>
			<div className="relative flex items-center">
				<Sticker color="light-cherry" width="1/6" height="2/6" pos="start" className="hidden md:block" />
				<div className="container relative z-1 pt-108px">
					<ConditionalWrapper
						condition={link}
						wrapper={children => <a href={link} target="_blank" rel="noopener" className="group inline-block">{children}</a>}
					>
						<div className="flex flex-col items-start mb-4">
							<h2 className="flex flex-col font-semibold uppercase text-24px tracking-tight leading-tight antialiased">
								<div className="flex items-end">
									<span className="shrink-0">{title}</span>
									{link && (
										<>
											<div className="flex items-end shrink-0 w-full">
												&nbsp;
												(
												<span className="uppercase text-18px leading-1-3">Visit site</span>
												<img src={externalLinkIcon} width="23" height="23" className="ml-5px mt-[-2px]" />
												)
											</div>
										</>
									)}
								</div>
								<UnderlineHover />
							</h2>
						</div>
					</ConditionalWrapper>
					<div className="flex flex-col gap-y-4 mb-4">
						<div className="font-light tracking-tight leading-tight antialiased xl:w-1/2">
							{description.map((descItem, i) => <p dangerouslySetInnerHTML={{ __html: descItem }} key={i} />)}
						</div>
						<Link href="/#work">
							<div className="flex items-start">
								<a className="inline-block shrink group font-semibold uppercase text-18px tracking-tight leading-tight antialiased group cursor-pointer">
									See more work
									<UnderlineHover />
								</a>
							</div>
						</Link>
					</div>
					{vimeoId && (
						<div className="player-wrapper">
							<ReactPlayer
								url={`https://vimeo.com/${vimeoId}`}
								className="react-player"
								playing={true}
								loop={true}
								controls={false}
								width='100%'
								height='100%'
								muted
							/>
						</div>
					)}
					{/* <div>
						<div className="font-light tracking-tight leading-tight antialiased xl:w-1/2">
							{description.map((descItem, i) => <p dangerouslySetInnerHTML={{ __html: descItem }} key={i} className="mb-15px last:mb-0" />)}
						</div>
						<Link href="/#work">
							<a className="inline-block group mt-15px font-semibold uppercase text-18px tracking-tight leading-tight antialiased group">
								See more work
								<UnderlineHover />
							</a>
						</Link>
					</div> */}
				</div>
				<Sticker color="mint" width="1/6" height="2/6" pos="end" className="hidden md:block" />
			</div>
		</Layout>
	)
};

export default Work;
