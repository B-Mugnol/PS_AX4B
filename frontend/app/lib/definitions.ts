export type PostComponentProperty = {
	postId: number
}

export type PostData = {
	userId: number,
	id: number,
	title: string,
	body: string
}

export type CommentData = {
	postId: number,
	id: number,
	name: string,
	email: string,
	body: string
}
