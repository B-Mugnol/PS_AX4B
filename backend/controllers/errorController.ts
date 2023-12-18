import { Request, Response } from "express"

// Page not found error
const pageNotFound = async (req: Request, res: Response) => {
	res.sendStatus(404)
}

export default { pageNotFound }
