import mongoose from "mongoose";
import { DatabaseConnectionError } from "./errors/database-connection-error";
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect("mongodb://localhost:27017/elearn", () => {
    console.log("Connected to MongoDB");
  });
};

export { connectDB };
