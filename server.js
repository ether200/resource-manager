const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRouter");
const subjectRouter = require("./routes/subjectRouter");
const resourceRouter = require("./routes/resourceRouter");
const connectDatabase = require("./config/database");

dotenv.config();
connectDatabase();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/subjects", subjectRouter);
app.use("/api/resources", resourceRouter);

app.use(globalErrorHandler);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in port: ${PORT}`));
