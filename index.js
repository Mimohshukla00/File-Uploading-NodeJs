const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
db.connectDB();

// default route

app.get("/", (req, res) => {
  res.send("Welcome to the home page of the API");
});

// port activation
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
