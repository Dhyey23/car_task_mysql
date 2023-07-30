/* eslint-disable no-undef */

require('dotenv').config()
const { Sequelize } = require('sequelize')
//const mysql = require('mysql2')

module.exports = db = {}

const sequelize =
    new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql'
    })

sequelize
    .authenticate()
    .then(() => console.log('Successfully connected to the database'))
    .catch((error) => console.log('Failed to connect the database:', error))


db.sequelize = sequelize

const brand = require('../schema/brandSchema')
const car = require('../schema/carsSchema')
const seller = require('../schema/sellersSchema')
const trasaction = require('../schema/transactionsSchema')
const user = require('../schema/usersSchema')
const car_seller = require('../schema/CarSellerSchema')

db.brand = brand
db.car = car
db.seller = seller
db.trasaction = trasaction
db.user = user
db.car_seller = car_seller


db.brand.hasMany(car,{foreignKey:'brandId'})
db.car.belongsTo(brand,{foreignKey:'brandId'})

db.car.belongsToMany(seller, {through:car_seller , foreignKey:'carId'})
db.seller.belongsToMany(car, { through:car_seller, foreignKey:'sellerId'})

db.trasaction.hasMany(car,{foreignKey:'carId'})
db.car.belongsTo(trasaction, {foreignKey:'carId'})

db.seller.hasOne(trasaction, { foreignKey: 'sellerId' })
db.trasaction.belongsTo(seller, { foreignKey: 'sellerId' })

// db.trasaction.hasOne(brand,{foreignKey:'brandId'})
// db.brand.belongsTo(brand, {foreignKey:'brandId'})

// sync all models with database
sequelize.sync({ force: false })
module.exports = sequelize



