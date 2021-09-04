const db = require('../models');
const User = db.User;
const Op = db.Sequelize.Op;

exports.findUserId = (req, res) => {
    const code = req.referral_code;
    User.findAll({
        attributes: ['UserID'],
        where: {
            ['Code'] : code
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    })
};