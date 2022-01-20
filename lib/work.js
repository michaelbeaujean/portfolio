import { workPages } from '../data';

export function getAllWorkSlugs() {
	return workPages.map(page => {
		const {
			slug,
		} = page;

		return {
			params: {
				slug: slug,
			}
		}
	})	
};

export function getWorkPageData(slug) {
	const workPage = workPages.find(page => page.slug === slug);
	
	return {
		slug,
		workPage
	}
};
