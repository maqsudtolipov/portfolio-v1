const mongoose = require("mongoose");

const porjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A project name is required"],
    unique: true,
  },
  imgUrl: String,
  description: String,
  github: String,
  live: String,
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Project = mongoose.model("Project", porjectSchema);

module.exports = Project;
