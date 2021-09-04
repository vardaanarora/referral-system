const Sequelize = require('sequelize');

const db = require('../config/database');

const Pay = db.define('referral_pay', {
    user_type: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    cost: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'referral_pay'
});

module.exports = Pay;