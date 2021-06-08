import React, { Dispatch } from 'react'
import { Link } from 'gatsby'

import Bars from '../assets/bars-solid.svg'

interface SidebarProps {
	sidebarOpen?: boolean
	setSidebarOpen: Dispatch<React.SetStateAction<boolean>>
}

const sidebar = ({ setSidebarOpen }: SidebarProps) => {
	return (
		<nav className='container h-screen py-10 flex flex-col text-gray-800'>
			<button
				onClick={() => setSidebarOpen(prev => !prev)}
				className='ml-auto mr-2 w-6 h-6 outline-none focus:outline-none'>
				<Bars />
			</button>
			<div className='p-10'>
				<ul
					className='grid gap-4 text-gray-600 uppercase text-sm'
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
				<div className='mt-10'>instagram</div>
			</div>
		</nav>
	)
}

export default sidebar
