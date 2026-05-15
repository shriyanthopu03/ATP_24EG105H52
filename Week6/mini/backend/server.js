import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./APIs/empApp.js";
import cors from "cors";
import { config } from "dotenv";
const app = exp();
config()
//add cors middleware
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL);
    console.log("DB connected");
    app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}..`));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});