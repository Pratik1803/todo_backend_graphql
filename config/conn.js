const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .set("strictQuery", true)
  .connect(MONGO_URI, { secureProtocol: true })
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((e) => {
    console.log(`Error in connecting to DB: ${e}`);
  });
