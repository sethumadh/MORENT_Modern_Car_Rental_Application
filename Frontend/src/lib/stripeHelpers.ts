import { Stripe, loadStripe } from "@stripe/stripe-js";

type StripePromise = Promise<Stripe | null>;

let stripePromise: StripePromise | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51M1woEBnpqvTrb1sgsGY86UxwTF7P7cWe294EQK19XdYNgmuopm0Hd1V8KGivJpoW3FkmCT8ixTdYxRHpSkMQzO3009KvT6iZP"
    );
  }

  return stripePromise;
};

type CarStripeObject = {
  car_title: string;
  daily_rate: number;
};

let staticDefaultCar: CarStripeObject = {
  car_title: "Koenigsegg",
  daily_rate: 99,
};

export const stripeConfirmation = async (carStripeData = staticDefaultCar) => {
  const stripe = await getStripe();

  const res = await fetch("http://localhost:5000/stripe/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carStripeData),
  });

  const data = await res.json();
  return stripe?.redirectToCheckout({ sessionId: data?.id });
};
