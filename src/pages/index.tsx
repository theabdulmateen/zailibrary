import React, { useEffect, useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
	const imgContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const yoffset = window.scrollY
			if (imgContainerRef.current) {
				imgContainerRef.current.style.top = 0.5 * yoffset + 'px'
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
		<Layout>
			<Seo title='Home' />
			<div className='flex flex-col text-center'>
				<div className='relative w-full h-[1200px] bg-gray-100'>
					<div className='w-full z-10 absolute' ref={imgContainerRef}>
						<div className='bg-white absolute m-40 z-20 rounded p-24 pt-20'>
							<h1 className='font-body italic text-4xl mb-4'>
								Hey there, I'm Zainab
							</h1>
							<p className='font-body'>
								It's nice to meet you. This is my little corner of the internet
								where I share some of my favourite things in life. This tends to
								look like my favourite coffee shops in my hometown of London, my
								favourite spaces around my home, and most importantly, everything
								I'm reading. I'm rarely seen without a book and I love talking about
								my latest reads and recommendations.
							</p>
						</div>
						<StaticImage
							src='../images/alfons-morales-YLSwjSy7stw-unsplash.jpg'
							alt='library image'
							placeholder='blurred'
							className='landing-image'
							imgClassName='bg-fixed z-0'
						/>
					</div>
				</div>
				<section className='bg-white z-20 flex flex-col'>
					<article className='prose lg:prose-xl self-center py-20'>
						<h3 className=''>Lorem fucking ipsum</h3>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions
							of Lorem Ipsum.
						</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions
							of Lorem Ipsum.
						</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions
							of Lorem Ipsum.
						</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions
							of Lorem Ipsum.
						</p>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text ever
							since the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not only five
							centuries, but also the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the 1960s with the release
							of Letraset sheets containing Lorem Ipsum passages, and more recently
							with desktop publishing software like Aldus PageMaker including versions
							of Lorem Ipsum.
						</p>
					</article>
				</section>
				<p>
					<Link to='/page-2/'>Go to page 2</Link> <br />
					<Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
				</p>
			</div>
		</Layout>
	)
}

export default IndexPage
