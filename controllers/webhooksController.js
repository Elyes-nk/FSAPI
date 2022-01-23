require("dotenv").config();
const Order = require("../models/Order");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.stripewebhook = (req, res) => {
  let data;
  let eventType;
  const webhookSecret = process.env.WEBHOOK_SECRET_KEY;

  if (webhookSecret) {
    let event;
    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        signature,
        webhookSecret
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }
  console.log(eventType);
  switch (eventType) {

    case "payment_intent.succeeded":
      const newOrder = new Order({
        amount: data.object.amount / 100,
        date:data.object.created,
        user: data.object.metadata.userId,
        products: JSON.parse(data.object.metadata.productsId),
        stripeId: data.object.id,
        status: data.object.status
      });
      newOrder.save().then((data) => console.log(data)).catch(err => console.log(err));
      break;
    default:
  }
  res.sendStatus(200);
};