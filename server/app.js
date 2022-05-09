const express = require("express");
const app = express();

app.get("/api/v1/projects", (req, res) => {
  res.json({
    success: true,
    message: "Projects fetched successfully",
    projects: [],
  });
});

const port = 1000;
app.listen(port, () => {
  console.log(`💎 Server is running on port ${port}`);
});
