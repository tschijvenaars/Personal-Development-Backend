import mongoose from "mongoose";

const heartSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const HeartRate = mongoose.model("HeartRate", heartSchema);

export default HeartRate;
