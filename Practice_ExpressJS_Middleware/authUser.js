const data = require('./data.json');

exports.authUser = (req, res, next) => {
    const usernameQuery = req.query.username;

    if (!usernameQuery) {
        return res.redirect('/forbidden');
    }

    const user = data.users.find(user => user.name.toLowerCase() === usernameQuery.toLowerCase());

    if (user) {
        req.currentUser = user.name;
        return next();
    } else {
        res.status(401).send('<h1>Uknown username, try again!</h1>');
    }
};
