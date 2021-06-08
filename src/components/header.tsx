import React, { Dispatch, useRef } from 'react'
import { Link } from 'gatsby'

import Bars from '../assets/bars-solid.svg'
import { useScrollEffect } from '../hooks/useScrollEffect'

interface HeaderProps {
	siteTitle: string
	sidebarOpen: boolean
	setSidebarOpen: Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
	const navRef = useRef<HTMLElement>(null)

	useScrollEffect({
		effect: ({ prevPos, currPos }) => {
			if (navRef.current && prevPos.y - currPos.y > 5) {
				navRef.current.style.transform = `translateY(-${0.5 * currPos.y}px)`
			}
		},
	})

	return (
		<React.Fragment>
			<header className='relative flex justify-center'>
				<nav
					className='container h-40 px-5 max-w-5xl flex items-center text-gray-800'
					ref={navRef}>
					<div className='mr-auto'>
						<div>
							<Link to='/'>
								<h1 className='font-logo text-4xl sm:text-5xl md:text-6xl tracking-tight'>
									Zailibrary
								</h1>
							</Link>
						</div>
					</div>
					<ul
						className='mx-10 hidden lg:flex flex-wrap sm:gap-8 gap-3 text-gray-600 uppercase text-sm'
						style={{ letterSpacing: '0.1875rem' }}>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/blog'>Blog</Link>
						</li>
						<li>
							<Link to='/'>About me</Link>
						</li>
						<li>
							<Link to='/'>Reading list</Link>
						</li>
					</ul>
					<div className='ml-auto hidden lg:block'>instagram</div>
					<button
						onClick={() => setSidebarOpen(prev => !prev)}
						className='ml-auto lg:hidden w-6 h-6 focus:outline-none'>
						<Bars />
					</button>
				</nav>
			</header>
		</React.Fragment>
	)
}

Header.defaultProps = {
	siteTitle: `Zailibrary`,
}

export default Header
