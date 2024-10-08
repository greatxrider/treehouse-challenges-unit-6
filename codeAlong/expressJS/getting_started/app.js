const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

// app.use((req, res, next) => {
//     console.log("Hello");
//     const err = new Error('Oh noes!');
//     err.status = 500;
//     next(err);
// });

app.use((req, res, next) => {
    console.log("world");
    next();
});

app.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', { name });
    } else {
        res.redirect('/hello');
    }
});

app.get('/cards', (req, res) => {
    res.locals.prompt = "Who is buried in Grant's tomb?"
    res.locals.hint = "Think about whose tomb it is."
    res.locals.colors = colors;
    res.render('card');
});

app.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
    console.log();
})

app.post('/hello', (req, res) => {
    // console.dir(req.body);
    // res.render('hello');
    // res.json(req.body);
    // res.render('hello', { name: req.body.username });
    // console.dir(req.body);
    res.cookie('username', req.body.username);
    res.redirect('/');
});

app.get('/goodbye', (req, res) => {
    res.redirect('/hello');
})

app.post('/goodbye', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.clearCookie('username');
        res.redirect('/hello');
    } else {
        res.redirect('/hello');
    }
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status || 500);
    res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});
