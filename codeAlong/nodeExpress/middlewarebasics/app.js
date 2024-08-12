const express = require('express');
const fav = require('./fav');
const app = express();
// app.use(fav);

app.use((req, res, next) => {
    req.message = 'This message made it!';
    next();
});

app.use((req, res, next) => {
    console.log(req.message);
    next();
});

app.get('/mark', (req, res) => {
    console.log(req.message);
    res.send('Done');
})

app.use((req, res) => {
    res.send('<h1>Express is working!</h1>')
});

app.listen(3000);
