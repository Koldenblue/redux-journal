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
    console.log(req.body)
    if (doc === null) {
      console.log(' no doc yet')
      db.Journal.create(req.body).then(() => {
        db.Journal.findOne({}, (err, doc) => {
          doc.entries.push(req.body)
          doc.save()
          res.json(doc);
        })
      })
    } else {
      doc.entries.push(req.body)
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

router.delete('/delete/:date', (req, res) => {
  console.log(req.params)
  console.log('delete route');
  // db.Journal.deleteOne()
  res.json({})
})

module.exports = router;
