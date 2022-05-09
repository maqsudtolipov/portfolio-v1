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

//-- Param middleware
exports.checkID = (req, res, next, val) => {
  console.log(req.params.id * 1, projects.length);
  if (req.params.id * 1 > projects.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({
      status: "fail",
      message: "Name and description are required",
    });
  }
  next();
};

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

  project = projects.find((el) => el.id === req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
};

exports.createProject = (req, res) => {
  // console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      projects: req.body,
    },
  });
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
