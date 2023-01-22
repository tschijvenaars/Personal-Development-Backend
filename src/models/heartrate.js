import mongoose from "mongoose";

const heartSchema = new mongoose.Schema({
  hrvalues: {
    type: Number,
    required: true,
  },
  dates: {
    type: Date,
    default: Date.now,
  },
  user: { type: String, required: true },
});

const HeartRate = mongoose.model("HeartRate", heartSchema);

export default HeartRate;
