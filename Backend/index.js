import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import bookRouter from "./routes/book.js"

const app = express();

dotenv.config();

const PORT = process.env.PORT;
const URI = process.env.MongoDBURI;

//Connection
try {
  mongoose.connect(URI)
  console.log("MONGODB CONNECTED!")
} catch (e) {
  console.log("Error:", e);
}

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT ${PORT}`);
});
