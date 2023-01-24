import mongoose from "mongoose";

const weightSchema = new mongoose.Schema({
  wvalue: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Weight = mongoose.model("Weight", weightSchema);

export default Weight;
