const router = require("express").Router();
const axios = require("axios");
const db = require("../models")

router.get('/entry', (req, res) => {
    let data = {hi: 'hi'}
    res.json(data)
})

module.exports = router;
