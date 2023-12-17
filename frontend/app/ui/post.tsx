import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './post.module.css'
import { PostData, PostComponentProperty, CommentData } from '../lib/definitions'
import { Comment } from './comment'

export function Post({ postId }: PostComponentProperty) {
	const [post, setPostData] = useState<PostData | null>(null)
	const [comments, setComments] = useState<CommentData[] | null>(null)
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		axios.get(`${process.env.URL || "http://localhost:3003"}/post/${postId}`)
			.then(({ data }) => {
				setPostData(data.post)
				setComments(data.comments)
				setLoading(false)
			})
	}, [postId])


	if (isLoading) return <p className={styles.loading}>Loading, please wait...</p>
	if (!post) return <p>We ran into some issues. Please wait a few moments before reloading.</p>

	return (
		<div className={styles.post}>
			<p className={styles.title}>{post?.title}</p>
			<p className={styles.content}>{post?.body}</p>
			<div className={styles.comments}>
				{comments?.map(
					({ id, name, body }) => <Comment key={id} name={name} content={body} />
				)}
			</div>
		</div>
	)
}
