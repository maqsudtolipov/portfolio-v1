const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/v1/projects", (req, res) => {
  res.json({
    success: true,
    message: "Projects fetched successfully",
    data: {
      projects: [],
    },
  });
});

app.post("/api/v1/projects", (req, res) => {
  // console.log(req.body);

  res.status(201).json({
    success: true,
    data: {
      project: req.body,
    },
  });
});

const port = 1000;
app.listen(port, () => {
  console.log(`💎 Server is running on port ${port}`);
});
