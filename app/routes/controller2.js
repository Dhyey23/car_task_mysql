// const Brand = require('../schema/brandSchema')
// const Car = require('../schema/carsSchema')
// const User = require('../schema/usersSchema')
// const Seller = require('../schema/sellersSchema')
// const Transaction = require('../schema/transactionsSchema')

// const jwt = require('jsonwebtoken')
// const secretKey = 'dhyey'
const messages = require('../message')

const {getAllcar, getAllCars} = require('./makeFunction.js')

const carData = async (req, res) => {
    try {
        const brandData = await getAllcar()
        return res.status(messages.status.statusSuccess).json({ 'brand Data': brandData })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const allCar = async (req, res) => {
    try {
        const carData = await getAllCars()
        return res.status(messages.status.statusSuccess).json({ 'Data': carData })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {carData, allCar}