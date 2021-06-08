import React, { useRef, useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from './header'
import Sidebar from './sidebar'
import { useScrollEffect } from '../hooks/useScrollEffect'

interface LayoutProps {
	children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
	const [sidebarOpen, setSidebarOpen] = useState(false)
	const miniNavRef = useRef<HTMLElement>(null)

	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	useScrollEffect({
		effect: ({ prevPos, currPos }) => {
			if (miniNavRef.current) {
				if (currPos.y < 500) {
					miniNavRef.current.style.transform = 'translateY(-75px)'
					miniNavRef.current.style.transitionDuration = '0.1s'
				} else {
					miniNavRef.current.style.transitionDuration = '0.3s'
				}

				if (currPos.y > 500 && prevPos.y - currPos.y > 0) {
					miniNavRef.current.style.transform = 'translateY(0px)'
				} else {
					miniNavRef.current.style.transform = 'translateY(-75px)'
				}
			}
		},
	})

	return (
		<div className='base-container'>
			{/* fixed nav needs to be relative to non translating parent */}
			<nav
				className='mininav min-w-full fixed grid place-items-center top-0 z-50 bg-white '
				ref={miniNavRef}>
				<div className='container px-5 py-2 max-w-5xl flex items-center justify-center text-gray-800'>
					<div className='mr-auto'>
						<div>
							<Link to='/'>
								<h1 className='font-logo text-lg sm:text-3xl md:text-4xl tracking-tight'>
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
					<div className='ml-auto'>instagram</div>
				</div>
			</nav>

			<div
				className='sidebar-transition'
				style={{ transform: sidebarOpen ? 'translateX(-400px)' : 'translateX(0px)' }}>
				<Header
					siteTitle={data.site.siteMetadata?.title || `Welcome to ZBlog`}
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/>
				<main>{children}</main>
				<div>
					<footer
						style={{
							marginTop: `2rem`,
						}}>
						© {new Date().getFullYear()}, Socials: - - -
					</footer>
				</div>
				<div
					style={{
						display: sidebarOpen ? 'block' : 'none',
						transition: sidebarOpen ? '0.4s background-color ease-in' : 'none',
					}}
					className='hidden fixed top-0 right-0 left-0 bottom-0 z-[99] bg-[#00000077] transition-transform'
					onClick={() => setSidebarOpen(false)}
				/>
			</div>
			<div
				style={{ transform: sidebarOpen ? 'translateX(0px)' : 'translateX(400px)' }}
				className='sidebar-transition w-[400px] transform translate-x-0 bg-white fixed right-0 top-0 bottom-0 z-[100]'>
				<Sidebar setSidebarOpen={setSidebarOpen} />
			</div>
		</div>
	)
}

export default Layout
