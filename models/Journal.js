const mongoose = require("mongoose");
const { Schema } = mongoose;


const journalSchema = new Schema({
  entries: {
    journalText: {
      type: String
    },
    mood: {
      type: String
    },
    date: {
      type: Date
    }
  }
})

// Note that methods, as well as .save(), must be used with findOne, rather than just find

// adds up all the moods and returns them in a single object
journalSchema.methods.getTotalMoods = function() {
  let moods = {};
  for (let i = 0, j = this.entries.length; i < j; i++) {
    let currentMood = this.entries[i].mood;
    console.log(currentMood);
    console.log(moods[currentMood])
    if (moods[currentMood] !== undefined) {
      moods[currentMood]++;
    }
    else {
      moods[currentMood] = 1;
    }
  }
  return moods;
}

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;