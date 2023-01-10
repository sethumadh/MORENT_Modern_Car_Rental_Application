import { NextFunction, Request, Response } from 'express';

import User from '../models/User';

const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
	const userId = req.params._id;

	try {
		const user = await User.findById(userId);
		user ? res.status(200).json({ user }) : res.status(404).json({ message: 'User was not found' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

export default { getOneUser };
