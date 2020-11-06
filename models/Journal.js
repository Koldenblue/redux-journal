const mongoose = require("mongoose");

const { Schema } = mongoose;


const journalSchema = new Schema({
  entries: [{
    journalText: {
      type: String
    },
    mood: {
      type: String
    },
    date: {
      type: Date
    }
  }]
})


// adds up all the moods and returns them in a single object
journalSchema.methods.getTotalMoods = function() {
  let moods = {};
  for (let i = 0, j = this.entries.length; i < j; i++) {
    if (moods.entries.mood) {
      moods.entries.mood++;
    }
    else {
      moods.entries.mood = 0;
    }
  }
  return moods;
}

const Journal = mongoose.model("Journal", journalSchema)

module.exports = Journal;