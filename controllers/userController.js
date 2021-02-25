const User = require("../models/userModel");
const ApiError = require("../utils/ApiError");
const jwt = require("jsonwebtoken");
const catchAsyncError = require("../utils/catchAsyncError");
const bcrypt = require("bcryptjs");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3h",
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

const comparePassword = async (hatchedPassword, userPassword) => {
  return await bcrypt.compare(userPassword, hatchedPassword);
};

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  createSendToken(newUser, 201, res);
});

exports.loginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  if (!password || !email) {
    throw new ApiError("Please provide password and email", 400);
  }

  const user = await User.findOne({ email });

  if (!user || !(await comparePassword(user.password, password))) {
    throw new ApiError("Incorrect email or password", 401);
  }

  createSendToken(user, 200, res);
});

exports.getUserProfile = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } else {
    throw new ApiError("User not found", 404);
  }
});

exports.protect = catchAsyncError(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    throw new ApiError(
      "You are not logged in, please log in to get access",
      401
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id).select("-password");
  req.user = currentUser;
  next();
});
