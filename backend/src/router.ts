import express from 'express'
import error from './errorController'
import { getFullPost } from './postController'

export const postRouter = express.Router()
postRouter.get("/:postId", getFullPost)

export const errorRouter = express.Router()
errorRouter.all("*", error)
