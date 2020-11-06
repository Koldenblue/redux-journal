let mongoose = require("mongoose");

let db = require("../models"); // requires the index.js file in models folder

// This code connects to local workout database
mongoose.connect("mongodb://localhost/redux-journal", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let journalSeed = [{
  entries:
    [
      {
        journalText: 'help',
        mood: 'happy',
        date: new Date().setDate(new Date().getDate()),
      },
      {
        journalText: 'hi',
        mood: 'sad',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'frustrated',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'embarrassed',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'grumpy',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'confused',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'surprised',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'anxious',
        date: new Date().setDate(new Date().getDate() - 1),
      },
      {
        journalText: 'hi',
        mood: 'angry',
        date: new Date().setDate(new Date().getDate() - 1),
      }
  ]
}]

db.Journal.deleteMany({}).then(() => {
  db.Journal.collection.insertMany(journalSeed).then((data) => {
    console.log(data.result.n + ' records inserted')
    process.exit(0)
  }).catch((err) => {
    console.error(err);
    process.exit(1);
  })
})