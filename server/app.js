const dotenv = require("dotenv");
const express = require("express");

const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());

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

const getAllProjects = (req, res) => {
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
};

const getProject = (req, res) => {
  console.log(req.params);

  const project = projects.find((el) => el.id === req.params.id);

  if (!project) {
    return res.status(404).json({
      status: "fail",
      message: "Project not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
};

const createProject = (req, res) => {
  // console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      projects: req.body,
    },
  });
};

const updateProject = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<updated tour>",
    },
  });
};

const deleteProject = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};

app.route("/api/v1/projects").get(getAllProjects).post(createProject);

app
  .route("/api/v1/projects/:id")
  .get(getProject)
  .patch(updateProject)
  .delete(deleteProject);

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`💎 Server is running on port ${port}`);
});
