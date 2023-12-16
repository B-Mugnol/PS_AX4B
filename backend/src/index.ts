import express from 'express'
import { AddressInfo } from 'net'
import { postRouter, errorRouter } from './router'

// Setup
const app = express()
app.use(express.json())

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
