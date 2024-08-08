const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue'
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.locals.prompt = "Who is buried in Grant's tomb?"
    res.locals.hint = "Think about whose tomb it is."
    res.locals.colors = colors;
    res.render('card');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});
