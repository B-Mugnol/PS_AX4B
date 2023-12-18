import express from 'express'
import postController from '../controllers/postController'

const router = express.Router()

router
	.get("/:postId", postController.getFullPost)

export default router
