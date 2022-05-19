const Project = require('../models/projectModel');

// projects
const projects = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Description 1',
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Description 2',
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'Description 3',
  },
];

exports.getAllProjects = async (req, res) => {
  try {
    console.log(req.query);

    // BUILD QUERY
    // 1. Filtering
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    const query = Project.find(queryObj);
    const projects = await query;

    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        project,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        project: newProject,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        project,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
