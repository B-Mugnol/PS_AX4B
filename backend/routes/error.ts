import express from 'express'
import errorController from '../controllers/errorController'

const router = express.Router()

router
	.all("*", errorController.pageNotFound)

export default router
