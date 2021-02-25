const ApiError = require("../utils/ApiError");

const handleValidationErrorMongo = (res, err) => {
  const errors = Object.values(err.errors).map((el) => ({
    field: el.name,
    error: el.message,
  }));

  return res.status(400).json(errors);
};

const handleCastErrorMongo = (err) => {
  const message = `No element found with the id: ${err.value}. Please use a valid one.`;
  return new ApiError(message, 400);
};

const handleJWTError = () =>
  new ApiError("Invalid token. Please log in again!", 401);

const handleJWTExpiredError = () =>
  new ApiError("Your session has expired! Please log in again.", 401);

const handleDuplicateFieldsMongo = (err) => {
  const value = Object.values(err.keyValue);
  const message = `The email: ${value} is already in use. Please use another one.`;
  return new ApiError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log(err);

    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (error.name === "ValidationError") {
      handleValidationErrorMongo(res, error);
    }
    if (error.kind === "ObjectId") {
      error = handleCastErrorMongo(error);
    }
    if (error.name === "JsonWebTokenError") {
      error = handleJWTError();
    }
    if (error.name === "TokenExpiredError") {
      error = handleJWTExpiredError();
    }
    if (error.code === 11000) {
      error = handleDuplicateFieldsMongo(error);
    }

    sendErrorProd(error, res);
  }
};

module.exports = globalErrorHandler;
