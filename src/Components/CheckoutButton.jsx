"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutButton = ({ priceId, packageName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      console.log("Starting checkout with priceId:", priceId);

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          packageName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Server response:", data);
        throw new Error(data.error || "Failed to create checkout session");
      }

      if (!data.sessionId) {
        throw new Error("No session ID received");
      }

      console.log("Session created, loading Stripe...");

      // Initialize Stripe
      const stripe = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
      );

      if (!stripe) {
        throw new Error("Failed to load Stripe");
      }

      console.log("Redirecting to checkout...");

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        console.error("Stripe checkout error:", error);
        throw error;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : "Choose This Plan"}
    </button>
  );
};

export default CheckoutButton;
