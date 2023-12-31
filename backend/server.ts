import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import postRouter from './routes/post'
import errorRouter from './routes/error'

// Setup
const app = express()
app.use(express.json())
app.use(cors())

// Router
app.use("/post", postRouter)
app.use("*", errorRouter)

// Server
const server = app.listen(process.env.PORT || 3003, () => {
	if (server) {
		const address = server.address() as AddressInfo
		console.log(`Server is running in http://localhost:${address.port}`)
	} else {
		console.error(`Failure upon starting server.`)
	}
})
