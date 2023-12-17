import Image from 'next/image'
import styles from './page.module.css'
import { Post } from './ui/post'

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					A very very simple (and ugly){' '}
					<code className={styles.code}>Next.js made website</code>
				</p>
				<div>
					<a
						href="https://github.com/B-Mugnol"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{' '}
						<Image
							src="/zombie.svg"
							alt="Zombie Logo"
							  className={styles.zombieLogo}
							width={100}
							height={100}
							priority
						/>
					</a>
				</div>
			</div>

			<Post postId={1} />
			<Post postId={2} />
		</main>
	)
}
