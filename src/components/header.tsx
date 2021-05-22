import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'

interface HeaderProps {
	siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => {
	const navRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const yoffset = window.scrollY
			if (navRef.current) {
				navRef.current.style.transform = `translateY(-${0.5 * yoffset}px)`
			}
		}

		if (window !== undefined) {
			window.addEventListener('scroll', handleScroll)
		}
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header className='relative'>
			<nav className='h-40 flex items-center text-gray-800 px-10 ' ref={navRef}>
				<div>
					<div>
						<Link to='/'>
							<h1 className='font-logo text-5xl tracking-tight'>Zailibrary</h1>
						</Link>
					</div>
				</div>
				<div className='mx-10 flex sm:gap-10 gap-5'>
					<h1
						className='text-gray-600 uppercase text-sm'
						style={{ letterSpacing: '0.1875rem' }}>
						<Link to='/'>blog</Link>
					</h1>
					<h1
						className='text-gray-600 uppercase text-sm'
						style={{ letterSpacing: '0.1875rem' }}>
						<Link to='/'>about</Link>
					</h1>
				</div>
			</nav>
		</header>
	)
}

Header.defaultProps = {
	siteTitle: `Zailibrary`,
}

export default Header
