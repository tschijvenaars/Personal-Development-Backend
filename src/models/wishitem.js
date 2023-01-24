import mongoose from 'mongoose';

const wishSchema = new mongoose.Schema({
  shortDescription: {
    type: Number,
    required: true,
  },
  longDescription: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const WishItem = mongoose.model('Weather', wishSchema);

export default WishItem;
