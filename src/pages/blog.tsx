import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useEffect, useRef } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

interface BlogPostTemplateProps {
	data: any
	location: string
}

const Blog = ({ data, location }: BlogPostTemplateProps) => {
	const posts = data.allMarkdownRemark.edges as any[]

	return (
		<Layout>
			<SEO title='Blog' />
			<div className='flex justify-center'>
				<div className='px-12 max-w-5xl grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 transition-blogs'>
					{posts?.map(post => {
						return (
							<div className='flex flex-col items-center' key={post.node.id}>
								<article className='prose lg:prose-lg xl:prose-xl'>
									<h5 className='text-center text-2xl opacity-80'>
										{post.node.frontmatter.title}
									</h5>
									<GatsbyImage
										image={
											post.node.frontmatter.featuredImage.childImageSharp
												.gatsbyImageData
										}
										alt='featured image'
									/>
									<header className='grid place-items-center'>
										<p>{post.node.frontmatter.date}</p>
										<p>{post.node.excerpt}</p>
									</header>
								</article>

								<Link to={post.node.fields.slug}>
									<button className='px-6 py-4 border-solid border-2 border-black border-opacity-30'>
										Continue Reading
									</button>
								</Link>
								<hr className='mt-4' />
							</div>
						)
					})}
				</div>
			</div>
		</Layout>
	)
}

export default Blog

export const pageQuery = graphql`
	query AllMarkDownQuery {
		allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
			edges {
				node {
					id
					excerpt(format: PLAIN, pruneLength: 250, truncate: false)
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						featuredImage {
							childImageSharp {
								gatsbyImageData(
									layout: CONSTRAINED
									placeholder: BLURRED
									width: 600
									height: 700
								)
							}
						}
					}
				}
			}
		}
	}
`
