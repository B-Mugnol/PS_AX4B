import axios from 'axios'
import styles from './post.module.css'
import { PostData, PostComponentProperty, CommentData } from '../lib/definitions'
import { Comment } from './comment'

export async function Post({ postId }: PostComponentProperty) {
	try {
		const { data } = await axios.get(`${process.env.URL || "http://localhost:3003"}/post/${postId}`)
		const post: PostData = data.post
		const comments: CommentData[] = data.comments

		return (
			<div className={styles.post}>
				<p className={styles.title}>{post?.title}</p>
				<p className={styles.content}>{post?.body}</p>
				<div className={styles.comments}>
					{comments.map(
						({ id, name, body }) => <Comment key={id} name={name} content={body} />
					)}
				</div>
			</div>
		)
	} catch (error) {
		return (
			<div>
				{postId == 1 ? "We ran into some issues. Please wait a few moments before reloading." : ""}
			</div>
		)
	}
}
