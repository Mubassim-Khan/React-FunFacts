const mongoose = require("mongoose");
const mongoseURI = "mongodb://localhost:27017/React"

const connectToMongo = () => {
  mongoose
    .connect(mongoseURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Mongo Successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });
};

module.exports = connectToMongo;
