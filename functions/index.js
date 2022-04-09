const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  `sk_test_51KYmPhSIs4TF6F7EYV4htl5mN3tBPiq1rbcDv9wcsZP4ImXfFz8d0PTJP41jEqbtgnEkaEzL2VwyrEKBeEY43hqz00cPSES7fi`
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
  console.log("reciseved payment", total);
});

exports.api = functions.https.onRequest(app);

//exmle endpoint
//(http://localhost:5001/clone-manoj/us-central1/api
