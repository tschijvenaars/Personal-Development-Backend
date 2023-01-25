import mongoose from "mongoose";

const bloodPressureSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const BloodPressure = mongoose.model("BloodPressure", bloodPressureSchema);

export default BloodPressure;
