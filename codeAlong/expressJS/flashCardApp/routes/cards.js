const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

const getRandomIndex = (array) => {
    if (array.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.floor(Math.random() * array.length);
}

router.get('/', (req, res) => {
    const flashcardId = getRandomIndex(cards);
    res.redirect(`/cards/${flashcardId}`)
});

router.get('/:id', (req, res) => {
    const { side } = req.query;
    const { id } = req.params;

    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }

    const name = req.cookies.username;
    const text = cards[id][side];
    const { hint } = cards[id];

    const templateData = { id, text, name, side };

    if (side === 'question') {
        templateData.hint = hint;
        templateData.sideToShow = 'answer';
        templateData.sideToShowDisplay = 'Answer';
    } else if (side === 'answer') {
        templateData.sideToShow = 'question';
        templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData);
});

module.exports = router;
