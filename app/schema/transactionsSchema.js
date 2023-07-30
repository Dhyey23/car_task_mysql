const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/dbconnect')

const Transaction = sequelize.define('trasaction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'userId',
        },
        allowNull: false
    },

    sellerId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'sellers',
            key: 'sellerId',
        },
        allowNull: false
    },

    carId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'cars',
            key: 'carId',
        },
        allowNull: false
    },

    sCity: { type: Sequelize.STRING, allowNull: false },


})
sequelize.sync({ force: false })

module.exports = Transaction