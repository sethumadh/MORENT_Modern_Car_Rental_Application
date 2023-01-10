import { Request, Response, NextFunction } from 'express';

const checkAuthentication = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (req.isAuthenticated()) {
			next();
		} else {
			res.status(404).json({ success: false, message: 'This route is protected if user is not logged in' });
		}
	} catch (error) {
		res.status(500).json({ error });
	}
};

export default checkAuthentication;
