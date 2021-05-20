const Subject = require("../models/SubjectModel");
const Resource = require("../models/ResourceModel");
const ApiError = require("../utils/ApiError");
const catchAsyncError = require("../utils/catchAsyncError");

// Fn to evaluate if there's a subject with such name
const subjectExist = async (fieldValue, userId) => {
  return await Subject.find({
    creator: userId,
    name: fieldValue.toLowerCase(),
  });
};

exports.createSubject = catchAsyncError(async (req, res, next) => {
  const { name } = req.body;
  const duplicatedValue = await subjectExist(name, req.user._id);

  if (duplicatedValue.length > 0) {
    throw new ApiError("A subject with that name already exist", 400);
  }

  const newSubject = new Subject(req.body);
  newSubject.creator = req.user._id;
  await newSubject.save();
  res.status(200).json({
    status: "success",
    data: {
      newSubject,
    },
  });
});

exports.findSubjectByUser = catchAsyncError(async (req, res, next) => {
  const subjects = await Subject.find({ creator: req.user._id }).sort({
    _id: -1,
  });
  res.status(200).json({
    status: "success",
    data: {
      subjects,
    },
  });
});

exports.findSubject = catchAsyncError(async (req, res, next) => {
  const subject = await Subject.find({
    _id: req.params.id,
    creator: req.user._id,
  });

  if (subject.length === 0) {
    throw new ApiError("No subject found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      subject,
    },
  });
});

exports.deleteSubject = catchAsyncError(async (req, res, next) => {
  const subject = await Subject.findByIdAndDelete(req.params.id);

  if (!subject) {
    throw new ApiError("No subject found with that ID", 404);
  }

  await Resource.deleteMany({ subject: req.params.id });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.updateSubject = catchAsyncError(async (req, res, next) => {
  const { name } = req.body;
  const duplicatedValue = await subjectExist(name, req.user._id);

  if (duplicatedValue.length > 0) {
    throw new ApiError("A subject with that name already exist", 400);
  }

  const newSubject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!newSubject) {
    throw new ApiError("No subject found with that ID", 404);
  }

  res.status(200).json({
    status: "success",
    data: {
      data: newSubject,
    },
  });
});
