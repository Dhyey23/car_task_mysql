const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/dbconnect')

const Car = sequelize.define('car', {
    carId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

        references: {
            model: 'cars',
            key: 'carId',
        }
    },
    sName: { type: Sequelize.STRING, allowNull: false },

    brandId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'brands',
            key: 'brandId',
        },
        allowNull: false
    },

    sColor: { type: Sequelize.STRING, allowNull: false },

    sFuelType: { type: Sequelize.STRING, allowNull: false },

    nModel: { type: Sequelize.INTEGER, allowNull: false },

    dPrice: { type: Sequelize.DOUBLE, allowNull: false }
})
sequelize.sync({ force: false })

module.exports = Car