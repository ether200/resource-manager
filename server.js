import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import ApiError from "./utils/ApiError.js";
import catchAsyncError from "./utils/catchAsyncError.js";
import globalErrorHandler from "./controllers/errorController.js";
import userRouter from "./routes/userRouter.js";
import subjectRouter from "./routes/subjectRouter.js";
import resourceRouter from "./routes/resourceRouter.js";

import connectDatabase from "./config/database.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/subjects", subjectRouter);
app.use("/api/resources", resourceRouter);

app.all(
  "*",
  catchAsyncError(async (req, res, next) => {
    throw new ApiError(`Can not find ${req.originalUrl} on the server!`, 404);
  })
);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in port: ${PORT}`));
