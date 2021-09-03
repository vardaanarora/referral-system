const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Referral = require('../models/Referral');
const User = require('../models/User');
// const userController = require('../controller/user.controller');

router.get('/', (req, res) =>
    Referral.findAll({
        attributes: ['UserID', 'Code', 'Amount', 'TransactionID']
    })
    .then(referral => {
        console.log(referral);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

router.post('/add', (req, res) => {
    let{ referral_code, user_id } = req.body;
    
    User.findAll({
        attributes: ['UserID'],
        where: {
            ['Code'] : referral_code
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
    
    res.sendStatus(200);
});

module.exports = router;