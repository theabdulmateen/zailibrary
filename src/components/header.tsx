import * as React from 'react'
import { Link } from 'gatsby'
import Image from 'next/image'

interface HeaderProps {
	siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
	<header>
		<nav className='h-[85px] flex items-center text-gray-800 px-10 '>
			<div>
				<h1>
					<Link to='/'>
						<Image src='icons/icon-48x48.png' alt='logo' />
					</Link>
				</h1>
			</div>
			<div className='mx-10 flex gap-5 prose'>
				<h1
					className='text-gray-600 uppercase text-xs'
					style={{ letterSpacing: '0.1875rem' }}>
					<Link to='/'>blog</Link>
				</h1>
				<h1
					className='text-gray-600 uppercase text-xs'
					style={{ letterSpacing: '0.1875rem' }}>
					<Link to='/'>about</Link>
				</h1>
			</div>
		</nav>
	</header>
)

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
