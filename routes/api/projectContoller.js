/* Pulling in Mongoose
const connection = require("../config/connection.js");

// Express
const express = require("express");
const router = express.Router();

const db = require("../models");

//  Route to get all Projects
router.get("/api/projects", (req, res) => {
  db.Project.find( {} )
    .then((dbProject) => {
      res.send(dbProject);
    })
    .catch((error) => {
      console.log(error);
    })
});

// Route to create a project
router.post("/api/projects", (req, res) => {
  db.Project.create(req.body)
    .then((dbProject) => {
      res.send({
        id: dbProject._id
      });
    })
    .catch((error) => {
      console.log(error);
    })
});

// Route to get one Project
router.get("/api/projects/:projectID", (req, res) => {
  db.Project.findById(req.params.projectID, (err, dbProject) => {
    if (err) throw err;
    res.send(dbProject);
  })
})

module.exports = router;
*/