require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// My Routes (fixed)
const charactersRouter = require("./routes/characters");
const comicsRouter = require("./routes/comics");

// Use Routes
app.use(charactersRouter);
app.use(comicsRouter);

// Error Route
app.all("*", (req, res) => {
  res.status(404).json({ message: " 404 ERROR This route doesn't exist" });
});

// Server Port
app.listen(process.env.PORT, () => {
  console.log("Server started");
});
