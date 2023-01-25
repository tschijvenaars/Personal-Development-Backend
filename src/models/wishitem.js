import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
  shortDescription: {
    type: String,
    required: true,
  },
  longDescription: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const WishItem = mongoose.model("WishItem", wishSchema);

export default WishItem;
