require("dotenv").config();
const stripe = require("stripe");

const endpointSecret = process.env.WEBHOOK_SECRET_KEY;

exports.stripeWebhook = async function (req, res) {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  console.log(event.type);
};