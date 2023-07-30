const { Sequelize } = require('sequelize')
const { sequelize } = require('../database/dbconnect')

const Brand = sequelize.define('brand', {
    brandId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    sBrandName: { type: Sequelize.STRING, allowNull: false },

})
sequelize.sync({ force: false })

module.exports = Brand