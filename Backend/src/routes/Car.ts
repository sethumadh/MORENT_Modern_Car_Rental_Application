import express from 'express';

import controller from '../controllers/Car';
import checkAuthentication from '../middleware/authorization';

const carRouter = express.Router();

carRouter.post('/create', controller.createCar);
carRouter.get('/get/:carId', controller.findByOneCar);
carRouter.get('/get/', controller.allCars);
carRouter.patch('/update/:carId', controller.updateCar);
carRouter.delete('/delete/:carId', checkAuthentication, controller.deleteCar);

export default carRouter;
