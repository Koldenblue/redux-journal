const mongoose = require("mongoose");

const { Schema } = mongoose;


const journalSchema = new Schema({
  entry: {
    type: String
  }
})

const Journal = mongoose.model("Journal", journalSchema)

module.exports = Journal;