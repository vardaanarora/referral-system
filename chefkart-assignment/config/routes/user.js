const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');


// Get user list
router.get('/', (req, res) =>
    User.findAll({
        attributes: ['UserID', 'UserType', 'Phone', 'UserName', 'Email', 'Password', 'Code', 'Balance']
    })
    .then(user => {
        console.log(user);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

module.exports = router;