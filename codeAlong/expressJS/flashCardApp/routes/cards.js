const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('card', { prompt: "Who is buried in Grant's tomb?" });
});

router.get('/fuck', (req, res) => {
    res.send('<h1>Fuck!</h1>')
});

module.exports = router;
