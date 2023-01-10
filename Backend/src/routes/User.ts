import express from 'express';

import controller from '../controllers/User';
import checkAuthentication from '../middleware/authorization';

const userRouter = express.Router();

// Add protected Routes to user routes
userRouter.get('/get/:_id', checkAuthentication, controller.getOneUser);

userRouter.get('/getCurrentUser', (req, res) => {
	res.send(req.user);
});

export default userRouter;
