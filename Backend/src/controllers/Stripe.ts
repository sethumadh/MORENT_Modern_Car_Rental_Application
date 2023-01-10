import { Request, Response } from 'express';

import { stripeInstance } from '../utils/stripeInstance';

export const createStripeSession = async (req: Request, res: Response) => {
	try {
		const session = await stripeInstance.checkout.sessions.create({
			mode: 'subscription',
			payment_method_types: ['card'],
			billing_address_collection: 'auto',
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: { name: req.body.car_title },
						unit_amount: req.body.daily_rate * 100,
						recurring: { interval: 'day' }
					},
					quantity: 1
				}
			],
			success_url: `${req.headers.origin}`, //temporary url
			cancel_url: `${req.headers.origin}` ////temporary url
		});

		return res.json(session);
	} catch (err) {
		console.error(err);
	}
};
