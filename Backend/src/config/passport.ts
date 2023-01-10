import mongoose from 'mongoose';
import passport from 'passport';
import strategy from 'passport-google-oauth20';
import dotenv from 'dotenv';

import User from '../models/User';

dotenv.config();

const GoogleStrategy = strategy.Strategy;
const googleClient = process.env.GOOGLE_CLIENT_ID || '';
const googleSecret = process.env.GOOGLE_SECRET || '';

const passportSetup = () => {
	passport.use(
		new GoogleStrategy(
			{
				// options for google strategy
				clientID: googleClient,
				clientSecret: googleSecret,
				callbackURL: 'http://localhost:9090/auth/google/callback',
				passReqToCallback: true
			},
			async (req, accessToken: any, refreshToken: any, profile: any, done: any) => {
				console.log(profile);
				const newUser = {
					_id: new mongoose.Types.ObjectId(),
					googleId: profile.id,
					displayName: profile.displayName,
					firstName: profile.name.givenName,
					lastName: profile.name.familyName,
					image: profile.photos[0].value
				};
				try {
					let user = await User.findOne({ googleId: profile.id });
					console.log('User was found in db', user?.displayName);

					if (user) {
						done(null, user);
					} else {
						user = await User.create(newUser);
						await user?.save();
						done(null, user);
					}
				} catch (error) {
					console.log('There was an error creating a new user', error);
				}
			}
		)
	);

	passport.serializeUser((user, done) => {
		done(null, user);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err: any, user: Express.User) => done(err, user));
	});
};
export default passportSetup;
