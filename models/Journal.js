const mongoose = require("mongoose");

const { Schema } = mongoose;


const journalSchema = new Schema({
  journalText: {
    type: String
  },
  mood: {
    type: String
  }
})

const Journal = mongoose.model("Journal", journalSchema)

module.exports = Journal;