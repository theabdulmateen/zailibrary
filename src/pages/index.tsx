import React, { useRef } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'
import { useScrollEffect } from '../hooks/useScrollEffect'

const IndexPage = () => {
	const imgContainerRef = useRef<HTMLDivElement>(null)

	useScrollEffect({
		effect: ({ currPos }) => {
			if (imgContainerRef.current) {
				imgContainerRef.current.style.top = 0.5 * currPos.y + 'px'
			}
		},
	})

	return (
		<Layout>
			<Seo title='Home' />
			<div className='flex flex-col text-center'>
				<div className='relative w-full h-[600px] sm:h-[800px] bg-gray-100'>
					<div
						className='w-full h-full z-10 grid place-items-center sm:absolute'
						ref={imgContainerRef}>
						<div className='bg-white bg-opacity-30 sm:absolute max-w-full sm:max-w-lg lg:max-w-lg z-20 rounded p-6 py-4'>
							<h1 className='font-logo italic text-9xl text-white select-none'>
								Zailibray
							</h1>
						</div>
						<StaticImage
							src='../images/the-philosophical-hall.jpg'
							alt='library image'
							placeholder='blurred'
							className='landing-image'
							imgClassName='bg-fixed z-0'
						/>
					</div>
				</div>
				<section className='bg-white z-20'>
					<div className='flex flex-col'>
						<article className='prose lg:prose-xl self-center py-20'>
							<p>
								“What we love in our books are the depths of many marvelous moments
								seen all at once”
							</p>
							<p className='inline-block'> - Kurt Vonnegut</p>
						</article>
					</div>
					<div className='flex flex-col bg-gray-200 '>
						<article className='prose lg:prose-xl self-center py-20'>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy text
								ever since the 1500s, when an unknown printer took a galley of type
								and scrambled it to make a type specimen book. It has survived not
								only five centuries, but also the leap into electronic typesetting,
								remaining essentially unchanged. It was popularised in the 1960s
								with the release of Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing software like Aldus
								PageMaker including versions of Lorem Ipsum.
							</p>
						</article>
					</div>
				</section>
			</div>
		</Layout>
	)
}

export default IndexPage
