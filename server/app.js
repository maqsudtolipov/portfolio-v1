const dotenv = require("dotenv");
const express = require("express");
const projectRouter = require("./routes/projectRoutes");

const app = express();

dotenv.config({ path: "./config.env" });

// Middlewares

app.use(express.json());

app.use((req, res, next) => {
  console.log("I am the middleware d;)");
  next();
});

// Routes
app.use("/api/v1/projects", projectRouter);

module.exports = app;
