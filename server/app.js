const express = require("express");
const morgan = require("morgan");
const projectRouter = require("./routes/projectRoutes");

const app = express();



// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use((req, res, next) => {
  console.log("I am the middleware d;)");
  next();
});

// Routes
app.use("/api/v1/projects", projectRouter);

module.exports = app;
