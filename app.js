var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const productRouter = require("./routes/products");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/products", productRouter);

module.exports = app;
