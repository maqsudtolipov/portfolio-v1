const express = require("express");
const projectController = require("../controller/projectController");

const router = express.Router();

router.param("id", projectController.checkID);

router
  .route("/")
  .get(projectController.getAllProjects)
  .post(projectController.checkBody, projectController.createProject);

router
  .route("/:id")
  .get(projectController.getProject)
  .patch(projectController.updateProject)
  .delete(projectController.deleteProject);

module.exports = router;
