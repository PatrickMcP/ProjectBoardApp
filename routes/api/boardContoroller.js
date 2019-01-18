/* Mongoose
const connection = require("../config/connection.js");

// Express router
const express = require("express");
const router = express.Router();

// Mongoose models
const db = require("../models");

// Route to get all of the Boards
router.get("/api/boards", (req, res) => {
  db.Board.find({})
    .then((dbBoard) => {
      res.send(dbBoard);
    })
    .catch((error) => {
      console.log(error);
    })
});

// Route to create one board
router.post("/api/boards", (req,res) => {
  db.Board.create(req.body)
    .then((dbBoard) => {
      res.send({
        id: dbBoard._id
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Route to get one bpard by its ID
router.get("/api/boards/:boardID", (req, res) => {
  db.Board.findById(req.params.boardID, (error, dbBoard) => {
    if (error) throw error;
    res.send(dbBoard);
  });
});

module.exports = router;
*/