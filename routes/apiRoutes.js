const router = require("express").Router();
const axios = require("axios");
const db = require("../models")

router.get('/entry', (req, res) => {
    let data = {hi: 'hi'}
    res.json(data)
})

router.post('/journal', (req, res) => {
    console.log('body', req.body)
    db.Journal.create(req.body).then(data => {
        console.log(data);
        res.json(data);
    })
})

module.exports = router;
 