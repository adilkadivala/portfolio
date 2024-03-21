require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userData = require("./routes/authRoute");
const skillsData = require("./routes/skillsRoute");

// middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// routes

app.use("/", userData);
app.use("/", skillsData);

const PORT_NUMBER = process.env.SERVER_URI;

app.listen(PORT_NUMBER, () => {
  console.log(`Server is Running on PORT: ${PORT_NUMBER}`);
});
