import Image from 'next/image';
import ReactPlayer from 'react-player';
import Layout from '../../components/Layout';
import ConditionalWrapper from '../../components/ConditionalWrapper';
import Sticker from '../../components/Sticker';
import UnderlineHover from '../../components/UnderlineHover';
import externalLinkIcon from '../../public/external-link.svg';
import { getAllWorkSlugs, getWorkPageData } from '../../lib/work';
import React from 'react';

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
		<Layout>
			<div className="h-screen flex items-center">
				<Sticker color="light-cherry" width="1/6" height="2/6" pos="start" />
				<div className="container flex">
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
								muted
							/>
						</div>
					)}
					<div className="lg:w-1/2 lg:ml-auto">
						<div className="flex pb-2">
							<ConditionalWrapper
								condition={link}
								wrapper={children => <a href={link} target="_blank" rel="noopener" className="group flex">{children}</a>}
							>
								<h2 className="font-semibold uppercase text-24px tracking-tight leading-tight antialiased">
									{title}
									<UnderlineHover />
								</h2>
								{link && <Image src={externalLinkIcon} width="30" height="30" />}
							</ConditionalWrapper>
						</div>
						<p className="font-light tracking-tight leading-tight antialiased">{description}</p>
					</div>
				</div>
				<Sticker color="mint" width="1/6" height="2/6" pos="end" />
			</div>
		</Layout>
	)
};

export default Work;
