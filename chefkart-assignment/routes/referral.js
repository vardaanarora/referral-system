const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Referral = require('../models/Referral');
const Pay = require('../models/Pay');
const User = require('../models/User');
const Op = db.Sequelize.Op;

router.get('/', (req, res) => {
    res.sendStatus(200);
})

router.post('/add', async(req, res) => {
    let{ referral_code, user_id } = req.body;
    // Fetching id of the user whose referral code was used
    // and the type of user who had signed up
    let userdetails = await User.findAll({
        attributes: ['UserID','UserType'],
        order: ['UserID'],
        where: {
            [Op.or] : [
                {['Code'] : referral_code},
                {['UserID'] : user_id}
            ]
        }
    })
    .then(data =>{
    return data;
    })
    .catch(err => {
        console.log(err);
    })

    let referral_id = JSON.parse(JSON.stringify(userdetails[0])).UserID;
    let referred_user_type = JSON.parse(JSON.stringify(userdetails[1])).UserType;

    console.log(userdetails);
    console.log(referral_id);
    console.log(referred_user_type);

    // Fetching referral amount to paid to the user whose referral code was used
    let cost = await Pay.findAll({
        attributes: ['Cost'],
        where: {
            ['UserType'] : referred_user_type
        }
    })
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log(err);
    })

    let referral_pay = JSON.parse(JSON.stringify(cost[0])).Cost;
    console.log(referral_pay);

    let trans_id = 0;
    trans_id += 1;

    const referral = {
        id: referral_id,
        code: referral_code,
        amount: referral_pay,
        transaction_id: trans_id 
    };

    await Referral.create({
            UserID: referral_id,
            Code: referral_code,
            Amount: referral_pay,
            TransactionID: trans_id
    });
    
    res.sendStatus(200);
});

module.exports = router;