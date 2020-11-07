const router = require("express").Router();
const axios = require("axios");
const db = require("../models")

router.get('/journal/all', (req, res) => {
  console.log('journal/all')
  db.Journal.find({}, (err, data) => {
    res.json(data);
  })
})

router.post('/journal', (req, res) => {
  console.log(req.body)
  db.Journal.create({entries: req.body}).then(() => {
    res.json()
  })
})

router.get('/moodtotals', (req, res) => {
  db.Journal.find({}, (err, doc) => {
    if (err) console.error(err)
    console.log(doc)
    res.json(doc);
  })
})

router.delete('/delete/:date', (req, res) => {
  console.log(req.params)
  console.log('delete route');
  // db.Journal.deleteOne()
  res.json({})
})

module.exports = router;
