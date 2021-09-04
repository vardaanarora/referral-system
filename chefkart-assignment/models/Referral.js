const Sequelize = require('sequelize', {
    define: {
    freezeTableName: true,
    timestamps: false
    }
});
const db = require('../config/database');

const Referral = db.define('referral_ledger', {
    UserID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    Code: {
        type: Sequelize.STRING
    },
    Amount: {
        type: Sequelize.INTEGER
    },
    TransactionID: {
        type: Sequelize.INTEGER
    },    
}, {
    tableName: 'referral_ledger'
});

module.exports = Referral;