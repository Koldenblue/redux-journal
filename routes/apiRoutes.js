const router = require("express").Router();
const axios = require("axios");
const db = require("../models")

router.get('/journal/all', (req, res) => {
  console.log('journal/all')
  db.Journal.find({}, (err, data) => {
    res.json(data);
  })
})

router.put('/journal', (req, res) => {
  db.Journal.findOne({}, (err, doc) => {
    if (doc === null) {
      // todo: no entries yet?
      db.Journal.create(req.body)
    } else {
      console.log(doc)
      doc.entries.push(req.body)
      console.log(doc)
      doc.save()
      res.json(doc);
    }
  })
})

router.get('/moodtotals', (req, res) => {
  db.Journal.findOne({}, (err, doc) => {
    if (err) console.error(err)
    let totalMoods = doc.getTotalMoods();
    res.json(totalMoods);
  })
})



module.exports = router;
