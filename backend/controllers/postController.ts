import { Request, Response } from "express"
import axios from 'axios'

const getFullPost = async (req: Request, res: Response) => {
	try {
		const { data: postData } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${req.params?.postId}`
		)

		const { data: commentsData } = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${req.params?.postId}/comments`
		)

		const fullPostData = {
			post: postData,
			comments: commentsData
		}

		res.send(fullPostData)

	} catch (error) {
		res.sendStatus(400)
	}
}

export default { getFullPost }
