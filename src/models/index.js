import mongoose from "mongoose";

import User from "./user";
import Weight from "./weight";
import HeartRate from "./heartrate";
import BloodPressure from "./bloodpressure";
import Weather from "./weather";

const connectDb = () => {
  mongoose.set("useCreateIndex", true);
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const models = { User, BloodPressure, HeartRate, Weight, Weather };

export { connectDb };

export default models;
