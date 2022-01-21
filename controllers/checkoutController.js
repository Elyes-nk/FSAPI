require("dotenv").config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const initiateStripeSession = async (req) => {
    const line_items = [];
    req.body.cart.forEach(item=>{
      line_items.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: item.product.name
          },
          unit_amount: item.product.price*100,
        },
        quantity: item.amount
      });
    });

    const productsId = [];
    req.body.cart.forEach(item=>{
      productsId.push(item.product.id)
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: line_items,
        payment_intent_data:{
          metadata:{userId:req.body.userId, productsId:JSON.stringify(productsId)},
        },
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/confirmation`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
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