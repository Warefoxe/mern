const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://warefoxe123:135787531@cluster0.slfsk.mongodb.net/test";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log(`Mongo DB Connection Successfull`);
});

db.on("error", () => {
    console.log(`Mongo DB Connection Failed`);
});

module.exports = mongoose;