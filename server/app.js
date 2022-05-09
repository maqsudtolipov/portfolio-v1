const express = require("express");

const app = express();

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

app.get("/api/v1/projects", (req, res) => {
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
});

app.get("/api/v1/projects/:id", (req, res) => {
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
});

app.post("/api/v1/projects", (req, res) => {
  // console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      projects: req.body,
    },
  });
});

app.patch("/api/v1/projects/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "<updated tour>",
    },
  });
});

const port = 1000;
app.listen(port, () => {
  console.log(`💎 Server is running on port ${port}`);
});
