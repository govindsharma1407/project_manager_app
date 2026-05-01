import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// AUTH ROUTE TEST
app.get("/api/auth", (req, res) => {
  res.send("Auth route working");
});

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch(err => {
  console.error("Mongo Error:", err);
});