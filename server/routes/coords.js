const router = require('express').Router();
const Circle = require('../calculations/circle');
const logger = require('../logger');


router.get('/', (req, res) => {
    return res.status(200).send()
});

router.post('/', (req, res) => {
    const circlePos = req.body;

    console.log(req.body);
    res.sendStatus(200);
});

module.exports = router;