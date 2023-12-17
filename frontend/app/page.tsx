'use client'

import { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { Post } from './ui/post'

export default function Home() {
	const [currentPostId, setCurrentPostId] = useState(1);

	const nextPost = () => {
		setCurrentPostId(currentPostId + 1)
	}

	const previousPost = () => {
		if (currentPostId <= 1) return
		setCurrentPostId(currentPostId - 1)
	}

	return (
		<div className={styles.core}>
			{
				currentPostId == 1 ?
					<></>:
					<button  className={styles.changePostButton} onClick={previousPost}>Previous post</button>
			}
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

				<Post postId={currentPostId} />

			</main>
			<button className={styles.changePostButton} onClick={nextPost}>Next post</button>
		</div>
	)
}
