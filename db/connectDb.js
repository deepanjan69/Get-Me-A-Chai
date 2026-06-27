import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    console.log(process.env.MONGODB_URI);

    if (mongoose.connection.readyState === 1) {
      console.log("Already connected");
      return;
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected!");
    console.log(conn.connection.host);
  } catch (err) {
    console.error("Connection failed");
    console.error(err);
  }
};

export default connectDB;