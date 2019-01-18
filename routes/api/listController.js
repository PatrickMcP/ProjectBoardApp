/* Mongoose
const connection = require("../config/connection.js");

// Express
const express = require("express");
const router = express.Router();

const db = require("../models");

// Router to get all lists
router.get("/api/lists", (req, res) => {
  db.List.find({})
    .then((dbList) => {
      res.send(dbList);
    })
    .catch((error) => { 
      console.log(error);
    })
});

// Router to create a single list
router.post("/api/lists", (req, res) => {
  db.List.create(req.body)
    .then((dbList) => {
      res.send({
        id: dbList._id
      });
    })
    .catch((error) => {
      console.log(error);
    })
});

// Route to get on item by id
router.get("/api/lists/:listID", (req, res) => {
  db.List.findById(req.params.listID, (error, dbList) => {
    if (error) throw error;
    res.send(dbList);
  })
})

module.exports = router;
*/