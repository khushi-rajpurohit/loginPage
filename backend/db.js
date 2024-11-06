const mongoose = require('mongoose');
require('dotenv').config();


const dbURL = process.env.dbURL;

 function connectToDb() {
  mongoose.connect(dbURL)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log("Some error occurred", err));
};
module.exports = { connectToDb}