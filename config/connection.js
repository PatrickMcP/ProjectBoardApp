var mongoose = require("mongoose");

// this is our MongoDB database
const dbRoute = "mongodb://testuser:testpassword1@ds249824.mlab.com:49824/bcproject3-2";

// connects our back end code with the database
mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;