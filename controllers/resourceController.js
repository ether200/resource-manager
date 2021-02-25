const Resource = require("../models/ResourceModel");
const catchAsyncError = require("../utils/catchAsyncError");
const ApiError = require("../utils/ApiError");

exports.createResource = catchAsyncError(async (req, res, next) => {
  const newResource = await Resource.create(req.body);
  res.status(200).json({
    status: "success",
    data: {
      newResource,
    },
  });
});

exports.findResources = catchAsyncError(async (req, res, next) => {
  const resources = await Resource.find({
    subject: req.params.subjectId,
  }).sort({ _id: -1 });
  res.status(200).json({
    status: "success",
    data: {
      resources,
    },
  });
});

exports.deleteResource = catchAsyncError(async (req, res, next) => {
  const resource = await Resource.findByIdAndDelete(req.params.id);

  if (!resource) {
    throw new ApiError("No subject found with that ID", 404);
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updateResource = catchAsyncError(async (req, res, next) => {
  const newResource = await Resource.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newResource) {
    throw new ApiError("No subject found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      newResource,
    },
  });
});
