import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    shortDescription: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const TodoItem = mongoose.model('TodoList', todoSchema);

export default TodoItem;
