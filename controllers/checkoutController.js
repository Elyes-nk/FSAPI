const stripe = require('stripe')("sk_test_51KHlC8C8XExSuQ3w00VbrBqa4ClZ2TlCOT0FE1N6HaPyPZRpjUsv09OsbcWy9ZE6XbyMU7A1v4dsnYgBE5aID4zl00wtor9JgR");

const initiateStripeSession = async (req) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: "test product"
              },
              unit_amount: 100,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:3000/confirmation`,
        cancel_url: `http://localhost:3000/cancel`,
      });
    return session;
}

exports.createSession = async function (req, res) {
    try {
      const session = await initiateStripeSession(req);
      res.status(200).json({
        id: session.id,
        price: session.amout_total,
        currency: session.currency,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  };