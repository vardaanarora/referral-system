const Sequelize = require('sequelize', {
    define: {
    freezeTableName: true
    }
});
const db = require('../config/database');

const Referral = db.define('referral_ledger', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.INTEGER
    },
    transaction_id: {
        type: Sequelize.INTEGER
    },    
}, {
    tableName: 'referral_ledger'
});

module.exports = Referral;