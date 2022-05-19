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

    let query = Project.find(queryObj);

    // 2. Sorting default
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // 2.1 Sort by tags
    if (req.query.tags) {
      const tags = req.query.tags.split(',').join(' ');
      query = query.sort(tags);
    } else {
      query = query.sort('-createdAt');
    }

    // 3. Fields limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // 4. Pagination
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 16;
    const skip = (page - 1) * limit; // page 1 = skip 0, page 2 = skip 16, page 3 = skip 32

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numProjects = await Project.countDocuments();
      if (skip >= numProjects) {
        throw new Error('This page does not exist');
      }
    }

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
      message: err.message,
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
