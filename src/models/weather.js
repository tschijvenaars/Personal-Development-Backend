import mongoose from 'mongoose';

const weatherSchema = new mongoose.Schema({
  humidity: {
    type: Number,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  },
  wind: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Weather = mongoose.model('Weather', weatherSchema);

export default Weather;
