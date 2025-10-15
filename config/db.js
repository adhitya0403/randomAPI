import mongoose from "mongoose";

const connectDB = async (URI) => {
 await mongoose
    .connect(URI)
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

export default connectDB;
