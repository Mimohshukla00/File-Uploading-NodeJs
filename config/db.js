const mongoose = require("mongoose");
require("dotenv/config");

exports.connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log("something went wrong while db connection");
    });
};
