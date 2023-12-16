import { Request, Response } from "express"

// Default error
const pageNotFound = async (req: Request, res: Response) => {
	res.sendStatus(404)
}

export default pageNotFound
