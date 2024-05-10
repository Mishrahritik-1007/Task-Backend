const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title: { type: String, required: true },
    description: String,
    dueDate: String
});

module.exports = mongoose.model('Task', taskSchema);
