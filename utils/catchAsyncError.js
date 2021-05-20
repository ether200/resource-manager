// Fn to catch errors and handle it to the error middleware
const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      next({ ...error, message: error.message });
    });
  };
};

module.exports = catchAsyncError;
