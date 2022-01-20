import { useEffect } from 'react';
import NextHead from 'next/head';
import ReactGA from 'react-ga';

const Head = ({ children, title }) => {
	useEffect(() => {
		ReactGA.initialize('UA-56532799-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<>
			<NextHead>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />

				<title>{title}</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="description" content="Michael Beaujean is a web developer in New York City - portfolio, contact information." />
				<meta name="author" content="Michael Beaujean" />
				<link rel="canonical" href="https://beaujean.io/" />
				<meta property="og:title" content="Michael Beaujean - New York City-based Web Developer" />
				<meta property="og:description" content="Michael Beaujean is a web developer in New York City - portfolio, contact information." />
				<meta property="og:url" content="https://beaujean.io" />
				{children}
			</NextHead>
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700;900&display=swap" rel="stylesheet" />
		</>
	);
}

export default Head;
