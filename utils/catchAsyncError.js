const catchAsyncError = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((error) => {
      next({ ...error, message: error.message });
    });
  };
};

export default catchAsyncError;
