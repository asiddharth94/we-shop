import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // stripe gives us the price in cents, thus converting to dollar value
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KZvNNSB9RtsbFM0agtcidSRSQCYWMq3lmYacxSRj6JdfTYte377MVwrcZAEET9zSkkEZ0PnEn4dpnhlm6INJ17A00jSyzGbUO";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name="We Shop"
      label="Pay Now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
