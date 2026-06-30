import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

console.log(process.env.KEY_ID);
console.log(process.env.KEY_SECRET);

const razorpay = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});

try {
  const order = await razorpay.orders.create({
    amount: 100,
    currency: "INR",
  });

  console.log(order);
} catch (err) {
  console.log(err);
}