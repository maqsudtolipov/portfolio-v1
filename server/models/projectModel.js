const mongoose = require('mongoose');

const porjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A project title is required'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'A project description is required'],
  },
  image: {
    type: String,
    required: [true, 'A project image url is required'],
  },
  github: {
    type: String,
    required: [true, 'A project github url is required'],
  },
  live: {
    type: String,
    required: [true, 'A project live url is required'],
  },
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
const Project = mongoose.model('Project', porjectSchema);

module.exports = Project;
