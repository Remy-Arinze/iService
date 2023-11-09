const express = require('express');
const reportSchema = require('./models/Schema.js');
const router = express.Router();

router.get('/', (req, res) => { res.send('this is home') });

router.post('/report', (req, res) => {
})

module.exports = router;
