/* Mongoose
const connection = require("../config/connection.js");

// Express
const express = require("express");
const router = express.Router();

const db = require("../models");

// Router to get all cards
router.get("/api/cards", (req, res) => {
  db.Card.find({})
    .then((dbCard) => {
      res.send(dbCard);
    })
    .catch((error) => { 
      console.log(error);
    })
});

// Router to create a single card
router.post("/api/cards", (req, res) => {
  db.Card.create(req.body)
    .then((dbCard) => {
      res.send({
        id: dbCard._id
      });
    })
    .catch((error) => {
      console.log(error);
    })
});

// Route to get on card by id
router.get("/api/cards/:cardID", (req, res) => {
  db.Card.findById(req.params.cardID, (error, dbCard) => {
    if (error) throw error;
    res.send(dbCard);
  })
})

module.exports = router;
*/