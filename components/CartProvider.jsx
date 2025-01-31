"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="https://commerce-beta-fawn-21.vercel.app/stripe/success"
      cancelUrl="https://commerce-beta-fawn-21.vercel.app/stripe/error"
      language="es"
      currency="ARS"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
