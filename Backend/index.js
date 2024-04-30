const express =require("express")
const dotenv =require("dotenv")
const mongoose =require("mongoose")
const {bookRouter} = require("./routes/book")
const {userRouter} = require("./routes/user")
const cors =require("cors")


const app = express();

app.use(cors());
app.use(express.json());

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


app.use("/book",bookRouter)
app.use("/user",userRouter) 

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT ${PORT}`);
});
