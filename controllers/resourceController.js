import Resource from '../models/ResourceModel.js';
import catchAsyncError from '../utils/catchAsyncError.js';
import ApiError from '../utils/ApiError.js';

export const createResource = catchAsyncError(async (req, res, next) => {
  const newResource = await Resource.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      newResource,
    },
  });
});

export const findResources = catchAsyncError(async (req, res, next) => {
  const resources = await Resource.find({
    subject: req.params.subjectId,
  }).sort({ _id: -1 });
  res.status(200).json({
    status: 'success',
    data: {
      resources,
    },
  });
});

export const deleteResource = catchAsyncError(async (req, res, next) => {
  const resource = await Resource.findByIdAndDelete(req.params.id);

  if (!resource) {
    throw new ApiError('No subject found with that ID', 404);
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

export const updateResource = catchAsyncError(async (req, res, next) => {
  const newResource = await Resource.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!newResource) {
    throw new ApiError('No subject found with that ID', 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      newResource,
    },
  });
});
