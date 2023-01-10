import express, { Application, Request, Response, NextFunction } from 'express';
import session from 'express-session';
import http from 'http';
import mongoose from 'mongoose';
import passport from 'passport';
import MongoStore from 'connect-mongo';
import cors from 'cors';

import Logging from './Library/Logging';
import { config, passportSetup } from './config/index';
import { authRoutes, carRoutes, stripeRoutes, userRoutes } from './routes/index';

const routerServer: Application = express();
const CLIENT_LINK = 'http://localhost:5173';

routerServer.use(express.json());
routerServer.use(express.urlencoded({ extended: true }));

routerServer.use(
	session({
		secret: 'black cat',
		resave: false,
		saveUninitialized: false,
		cookie: { maxAge: 3600000 },
		store: MongoStore.create({ mongoUrl: config.mongo.url })
	})
);

routerServer.use(passport.initialize());
routerServer.use(passport.session());
passportSetup();

/** Connect to Mongoose */
mongoose
	.connect(`${config.mongo.url}/car_rental_web_app`, { retryWrites: true, w: 'majority' })
	.then(() => {
		Logging.info('Connected to mongoDB.');
		StartServer();
	})
	.catch((error) => {
		Logging.error('Unable to connect: ');
		Logging.error(error);
	});

/** Only start the server if Mongoose connects */

const StartServer = () => {
	routerServer.use((req: Request, res: Response, next: NextFunction) => {
		/** Log The Request */
		Logging.info(`Incoming => Method [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

		res.on('finish', () => {
			/** Log The Response */
			Logging.info(`Incoming => Method [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`);
		});

		next();
	});

	routerServer.use(express.urlencoded({ extended: true }));
	routerServer.use(express.json());
  routerServer.use(cors());

	/** Rules of our API */
	routerServer.use((req: Request, res: Response, next: NextFunction) => {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

		if (req.method == 'OPTIONS') {
			res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
			return res.status(200).json({});
		}

		next();
	});

	routerServer.use(cors({ credentials: true, origin: CLIENT_LINK }));

	/** Routes */
	routerServer.use('/cars', carRoutes);
	routerServer.use('/users', userRoutes);
	routerServer.use('/auth', authRoutes);
	routerServer.use('/stripe', stripeRoutes);

	/** API Check */
	routerServer.get('/ping', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ message: 'pong' }));

	/** Error Handling */
	routerServer.use((req: Request, res: Response, next: NextFunction) => {
		const error = new Error('Not Found');
		Logging.error(error);

		return res.status(404).json({ message: error.message });
	});

	http.createServer(routerServer).listen(config.server.port, () => Logging.info(`Server is running on port ${config.server.port}.`));
};
