const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost/facebooklocal" || process.env.DATABASE_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Connecting to DB failed...", err);
  });

app.use(
  cors({
    origin: "http://localhost:3000",
    useSuccessStatus: 200,
  })
);
// register route files dynamically
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("server is listening " + PORT);
});
