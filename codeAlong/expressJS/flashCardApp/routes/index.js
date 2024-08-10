const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
});

router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
    console.log();
})

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/');
});

router.get('/goodbye', (req, res) => {
    res.redirect('/hello');
})

router.post('/goodbye', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.clearCookie('username');
        res.redirect('/hello');
    } else {
        res.redirect('/hello');
    }
});

module.exports = router;
