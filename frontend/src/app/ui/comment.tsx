import styles from './comment.module.css'

export function Comment({ name, content }: any) {

	return (
		<div className={styles.comment}>
			<p className={styles.author}>{name}</p>
			<p className={styles.content}>{content}</p>
		</div>
	)
}
