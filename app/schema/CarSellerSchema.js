const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/dbconnect')

const car_seller = sequelize.define('car_seller', {

    carId: {

        type: Sequelize.INTEGER,
        references: {
            model: 'cars',
            key: 'carId'
        }

    },

    sellerId: {

        type: Sequelize.INTEGER,
        references: {
            model: 'sellers',
            key: 'sellerId'
        }
    }

})
sequelize.sync({ force: false })

module.exports = car_seller