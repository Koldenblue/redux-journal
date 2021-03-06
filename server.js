const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/index.js");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger("dev"));

app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/redux-journal", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
