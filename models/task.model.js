const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  uid: {
    type: String,
    required: true,
    trim: true,
  },
  completed: Boolean,
});

const TaskModel = mongoose.models.task || mongoose.model("task", taskSchema);

module.exports = { TaskModel };
