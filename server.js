require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodySanitizer = require("./app/middlewares/body-sanitizer.js");
const { connectDB } = require("./app/database.js");

const multer = require('multer');
const upload = multer();

const app = express();
const Router = require("./app/routers");

connectDB();

app.use(cors('*'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(upload.none());

app.use(bodySanitizer);

app.use(express.static("public"));

app.use(Router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});