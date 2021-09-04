const Sequelize = require('sequelize');

const db = require('../config/database');

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    user_type: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    code: {
        type: Sequelize.STRING
    },
    balance: {
        type: Sequelize.INTEGER
    }    
}, {
    tableName: 'user'
});

module.exports = User;