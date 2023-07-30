const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/dbconnect')

const Seller = sequelize.define('seller', {
    sellerId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    sSellerName: { type: Sequelize.STRING, allowNull: false },

    sCity: { type: Sequelize.STRING, allowNull: false },

    carId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'cars',
            key: 'carId',
        },
        allowNull: false
    },

})
sequelize.sync({ force: false })

module.exports = Seller