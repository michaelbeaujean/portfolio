import * as React from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

const Head = ({ children, title }) => (
	<>
		<NextHead>
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />

			<title>{title}</title>

			{children}
		</NextHead>
		<GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700;900&display=swap" />
	</>
);

export default Head;
