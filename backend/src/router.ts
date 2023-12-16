import express from 'express'
import error from './errorController'
import { getFullPost } from './postController'

// Post Routes
export const postRouter = express.Router()
postRouter.get("/:postId", getFullPost)

// Error Routes
export const errorRouter = express.Router()
errorRouter.all("*", error)
