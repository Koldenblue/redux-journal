const router = require("express").Router();
const axios = require("axios");
const db = require("../models")

router.put('/journal', (req, res) => {
  db.Journal.findOne({}, (err, doc) => {
    if (doc === null) {
      db.Journal.create(req.body)
    }
    console.log(doc)
    doc.entries.push(req.body)
    console.log(doc)
    doc.save()
    res.json(doc);
  })
})

router.get('/moodtotals', (req, res) => {
  db.Journal.find({}, (err, doc) => {
    if (err) console.error(err)
    console.log(doc);
    // let totalMoods = doc.getTotalMoods();
    res.json({});
  }).catch((err) => {
    console.log("ERrOR")
    console.log(err);
  })
})



module.exports = router;
