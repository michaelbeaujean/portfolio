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
		videoUrl,
	} = workPageData.workPage;

	return (
		<Layout title={title}>
			<div className="h-screen flex items-center">
				<Sticker color="light-cherry" width="1/6" height="2/6" pos="start" className="hidden md:block" />
				<div className="container">
					<ConditionalWrapper
						condition={link}
						wrapper={children => <a href={link} target="_blank" rel="noopener" className="group inline-block">{children}</a>}
					>
						<h2 className="font-semibold uppercase text-24px mb-15px tracking-tight leading-tight antialiased">
							{title}
							<UnderlineHover />
						</h2>
					</ConditionalWrapper>
					{videoUrl && (
						<div>
							<ReactPlayer
								url={videoUrl}
								config={{
									youtube: {
										playerVars: {
											showinfo: 0,
											modestBranding: 1,
										}
									},
								}}
								playing={true}
								loop={true}
								controls={false}
								className="max-w-full"
								muted
							/>
						</div>
					)}
					<div>
						<p className="mt-20px font-light tracking-tight leading-tight antialiased xl:w-1/2" dangerouslySetInnerHTML={{ __html: description }} />
						{link && (
							<>
								<a href={link} target="_blank" rel="noopener" className="group mt-20px font-semibold uppercase text-18px tracking-tight leading-tight antialiased group flex items-start">
									<div className="inline-block">
										Visit site
										<UnderlineHover />
									</div>
									<img src={externalLinkIcon} width="25" height="25" />
								</a>
							</>
						)}
						<Link href="/#work">
							<a className="inline-block group mt-15px font-semibold uppercase text-18px tracking-tight leading-tight antialiased group">
								See more work
								<UnderlineHover />
							</a>
						</Link>
					</div>
				</div>
				<Sticker color="mint" width="1/6" height="2/6" pos="end" className="hidden md:block" />
			</div>
		</Layout>
	)
};

export default Work;
