/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ProjectSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    boards: [{
      type: Schema.Types.ObjectId,
      ref: "Boards"
    }]
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Project", ProjectSchema);
*/