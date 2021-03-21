import Link from 'next/link';

const Logo = () => {
	return (
		<Link href="/">
			<a>
				<h1 className={`w-36 text-2xl font-black uppercase antialiased transition-colors duration-400`}>Michael Beaujean</h1>
			</a>
		</Link>
	)
}

export default Logo;