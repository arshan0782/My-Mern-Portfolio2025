import mongoose from "mongoose";    

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName:"PortfolioData",
    })
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
};
