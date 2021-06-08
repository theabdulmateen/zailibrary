import React, { useEffect, useState } from 'react'
import { formatDistance } from 'date-fns'
import { gql, useMutation, useQuery } from '@apollo/client'

interface CommentsProps {
	commentsData: any
	slug: String
}

const parseDate = (dateRaw: string) => {
	if (dateRaw) {
		const date = new Date(dateRaw)
		return formatDistance(date, Date.now()) + ' ago'
	}
	return ''
}

const CommentsList = ({ comments }: { comments: any }) => {
	return (
		<div>
			{comments
				?.filter((c: any) => Boolean(c))
				.map((comment: any) => (
					<div key={comment?.id} className='flex flex-col'>
						<h4>
							{comment?.name}
							<span className='pl-2 text-xs opacity-40'>
								{parseDate(comment?.date)}
							</span>
						</h4>
						<p>{comment?.text}</p>
					</div>
				))}
		</div>
	)
}

const COMMENT_BY_SLUG = gql`
	query CommentBySlug($slug: String!) {
		zailibrary_comments(order_by: { date: desc }, where: { slug: { _eq: $slug } }) {
			id
			date
			name
			parent_comment_id
			slug
			text
		}
	}
`

const ADD_COMMENT = gql`
	mutation addComment($slug: String!, $text: String!, $name: String) {
		insert_zailibrary_comments_one(object: { name: $name, slug: $slug, text: $text }) {
			date
			id
			name
			parent_comment_id
			slug
			text
		}
	}
`

const Comments = ({ commentsData, slug }: CommentsProps) => {
	const [name, setName] = useState('Anon')
	const [text, setText] = useState('')
	const [comments, setComments] = useState<Comment[]>([])

	if (!slug) {
		return <div>loading</div>
	}
	const { data: commentsQueryData } = useQuery(COMMENT_BY_SLUG, {
		variables: { slug },
	})
	const [addComment, { data: addCommentData }] = useMutation(ADD_COMMENT, {
		variables: {
			slug,
			text,
			name,
		},
	})

	useEffect(() => {
		if (!addCommentData) {
			return
		}
		setComments(comments => [addCommentData.insert_zailibrary_comments_one, ...comments])
	}, [addCommentData])

	useEffect(() => {
		setComments(commentsQueryData?.zailibrary_comments)
	}, [commentsQueryData])

	return (
		<div className='px-5 prose font-caption lg:prose-md xl:prose-lg max-w-5xl w-full'>
			<h3 className='w-full'>Leave a comment</h3>
			<div className='flex items-center mb-4'>
				<label
					htmlFor='name'
					className='h-[48px] mr-2 uppercase px-10 inline-block text-center py-3 bg-gray-200 bg-opacity-50'>
					Name
				</label>
				<input
					id='name'
					className='w-full ring-1 ring-black ring-opacity-30 px-5 py-2'
					placeholder='Anonymous'
					value={name}
					onChange={Event => setName(Event.currentTarget.value)}
				/>
			</div>
			<textarea
				className='w-full ring-1 ring-black ring-opacity-30 px-5 py-2 min-h-[100px]'
				placeholder='Share your thoughts'
				value={text}
				onChange={Event => setText(Event.currentTarget.value)}
			/>
			<button
				className='w-full bg-red-100 px-10 py-3 text-lg font-bold uppercase text-center'
				onClick={() => {
					setText('')
					addComment()
				}}>
				comment
			</button>
			<div>
				{commentsQueryData ? (
					<CommentsList comments={comments} />
				) : (
					<CommentsList comments={commentsData} />
				)}
			</div>
		</div>
	)
}

Comments.defaultProps = {}

export default Comments
