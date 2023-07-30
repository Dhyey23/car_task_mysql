const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/dbconnect')

const User = sequelize.define('user', {
    userId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    sUserName: { type: Sequelize.STRING, allowNull: false },

    sPassword: { type: Sequelize.STRING, allowNull: false },

    sRole: { type: Sequelize.STRING, allowNull: false },

    sCity: { type: Sequelize.STRING, allowNull: false },

})
sequelize.sync({ force: false })

module.exports = User