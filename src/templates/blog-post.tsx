import React from 'react'
import { graphql, Link } from 'gatsby'
import Rating from 'react-rating'

import Comments from '../components/comments'
import Layout from '../components/layout'
import SEO from '../components/seo'
import EmptyStarSVG from '../assets/empty-star.svg'
import FilledStarSVG from '../assets/filled-star.svg'

interface BlogPostTemplateProps {
	data: any
}

const BlogPostTemplate = ({ data }: BlogPostTemplateProps) => {
	const post = data.markdownRemark
	const title = post?.frontmatter?.title
	const rating = post?.frontmatter?.rating * 20
	const { previous, next } = data

	return (
		<Layout>
			<SEO title={title!} />
			<div className='flex flex-col items-center'>
				<article className='px-5 prose lg:prose-lg xl:prose-xl max-w-5xl'>
					<header className='grid place-items-center'>
						<h1>{post?.frontmatter?.title}</h1>
						<section className='flex items-center'>
							<p className='mr-10'>{post?.frontmatter?.date}</p>
							<Rating
								start={0}
								stop={100}
								step={20}
								fractions={10}
								emptySymbol={<EmptyStarSVG />}
								fullSymbol={<FilledStarSVG />}
								readonly={true}
								initialRating={rating}
								className='!flex'
							/>
							<p className='ml-2'> - {post?.frontmatter?.rating}</p>
						</section>
					</header>
					<section dangerouslySetInnerHTML={{ __html: post?.html! }} />
					<hr />
				</article>
				<div>
					{previous && (
						<div className='m-5 text-lg transition-colors text-blue-400 hover:text-blue-500'>
							<Link to={`${previous?.fields?.slug}`}>
								{previous?.frontmatter?.title}
							</Link>
						</div>
					)}
					{next && (
						<div className='m-5 text-lg transition-colors text-blue-400 hover:text-blue-500'>
							<Link to={`${next?.fields?.slug}`}>{next?.frontmatter?.title}</Link>
						</div>
					)}
				</div>
			</div>

			<section className='flex flex-col items-center'>
				<Comments
					commentsData={data.comments.zailibrary_comments as any}
					slug={post?.frontmatter?.slug}
				/>
			</section>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostWithComments(
		$id: String!
		$slug: String!
		$previousPostId: String
		$nextPostId: String
	) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
				slug
				rating
			}
		}
		previous: markdownRemark(id: { eq: $previousPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
		next: markdownRemark(id: { eq: $nextPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
		comments {
			zailibrary_comments(order_by: { date: desc }, where: { slug: { _eq: $slug } }) {
				id
				date
				name
				parent_comment_id
				slug
				text
			}
		}
	}
`
