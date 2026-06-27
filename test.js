import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

console.log(process.env.MONGODB_URI);

async function test() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected!");
    console.log(conn.connection.host);
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
}

test();