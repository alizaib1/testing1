const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const PORT = process.env.PORT || 4000;

const routes = require("../routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forwFard to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const startServer = () => {
  try {
    // Start the server
    app.use(routes());
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("🚀 ~ startServer ~ error:", error);
  }
};

startServer();
