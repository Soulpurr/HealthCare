const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://api12:6E5SCNNgaRjgKjAK@cluster0.5zqtueq.mongodb.net/?retryWrites=true&w=majority";
const connectTodb = async () => {
  await mongoose.connect(
    "mongodb+srv://api12:6E5SCNNgaRjgKjAK@cluster0.5zqtueq.mongodb.net/Health?retryWrites=true&w=majority"
  );
  console.log("connected");
};
module.exports = connectTodb;
