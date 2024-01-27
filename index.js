const express = require("express");
const dotenv = require("dotenv");
const hotels = require("./data/hotels");
const flights = require("./data/flights");

dotenv.config();

const app = express();
app.use(express.json());

app.get("/hotels", (req, res) => {
  res.send(hotels);
});

app.get("/flights", (req, res) => {
  res.send(flights);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
