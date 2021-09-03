const Sequelize = require('sequelize', {
    define: {
    freezeTableName: true
    }
});
module.exports = new Sequelize('referralsystem', 'root', 'mysqladmin', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});