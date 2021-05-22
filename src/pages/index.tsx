import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
	<Layout>
		<Seo title='Home' />
		<div className='flex flex-col text-center px-10'>
			<h1 className='font-body italic text-4xl'>Hey there, I'm Zainab</h1>
			<p className='font-body'>
				It's nice to meet you. This is my little corner of the internet where I share some
				of my favourite things in life. This tends to look like my favourite coffee shops in
				my hometown of London, my favourite spaces around my home, and most importantly,
				everything I'm reading. I'm rarely seen without a book and I love talking about my
				latest reads and recommendations.
			</p>
			<p className='font-caption'>Now go build something great.</p>

			<p>
				<Link to='/page-2/'>Go to page 2</Link> <br />
				<Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
			</p>
		</div>
	</Layout>
)

export default IndexPage
