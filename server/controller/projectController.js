const Project = require("../models/projectModel");

// projects
const projects = [
  {
    id: "1",
    title: "Project 1",
    description: "Description 1",
  },
  {
    id: "2",
    title: "Project 2",
    description: "Description 2",
  },
  {
    id: "3",
    title: "Project 3",
    description: "Description 3",
  },
];

exports.getAllProjects = (req, res) => {
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
};

exports.getProject = (req, res) => {
  console.log(req.params);

  const project = projects.find((el) => el.id === req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
};

exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        project: newProject,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateProject = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<updated tour>",
    },
  });
};

exports.deleteProject = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
