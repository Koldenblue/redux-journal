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

// Note that methods, as well as .save(), must be used with findOne, rather than just find

// adds up all the moods and returns them in a single object
journalSchema.methods.getTotalMoods = function() {
  console.log("getting moods")
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

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;