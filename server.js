const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database connected! 😍"))
  .catch((error) => {
    console.log("Database is not connected! ☹️");
    console.log(error);
  });

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
