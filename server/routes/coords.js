const router = require('express').Router();
const coords = require('../calculations/coords');
const logger = require('../logger');


router.get('/', (req, res) => {

});

router.post('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.sendStatus(200);
});

module.exports = router;