const express =require("express")
const {getBooks} = require("../controller/book")

const bookRouter = express.Router();

bookRouter.get("/", getBooks);

module.exports={
    bookRouter
}
