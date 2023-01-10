import express from 'express';

import { createStripeSession } from '../controllers/Stripe';

const stripeRouter = express.Router();

stripeRouter.post('/session', createStripeSession);


/* Temporary Test sucesss & cancel routes */
stripeRouter.get('/success', (req, res) => {
  res.send('success');
})

stripeRouter.get('/canceled', (req, res) => {
  res.send('canceled');
})

export default stripeRouter;