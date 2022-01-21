require("dotenv").config();
const Order = require("../models/order");
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
      console.log(data);
      const newOrder = new Order({
        amount: data.object.amount,
        date:data.object.create,
        user: data.object.metadata.userId,
        products: data.object.metadata.productsId,
        stripeId: data.object.id,
        status: data.object.status
      });
      try {
        const neworeder = newOrder.save();
        res.status(201).json();
        console.log(neworeder);
      } catch (err) {
        res.status(500).json(err);
      }
          
      break;
    default:
  }
  res.sendStatus(200);
};