import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
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

const TodoItem = mongoose.model("TodoItem", todoSchema);

export default TodoItem;
