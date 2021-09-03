const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Pay');

router.get('/', (req, res) =>
    User.findAll({
        attributes: ['UserType', 'Cost']
    })
    .then(user => {
        console.log(user);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

module.exports = router;