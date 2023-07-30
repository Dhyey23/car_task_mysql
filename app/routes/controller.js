const Brand = require('../schema/brandSchema')
const Car = require('../schema/carsSchema')
const User = require('../schema/usersSchema')
const Seller = require('../schema/sellersSchema')
const Transaction = require('../schema/transactionsSchema')
const car_seller = require('../schema/CarSellerSchema')
const { Sequelize } = require('sequelize')
//const { sequelize } = require('../database/dbconnect')

const jwt = require('jsonwebtoken')
const messages = require('../message')
const secretKey = 'dhyey'

const brand = async (req, res) => {
    try {
        const { sBrandName } = req.body
        const brand = new Brand({
            sBrandName,

        })
        const brandSaved = await brand.save()
        res.status(201).json(brandSaved)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }
}

const car_seller_add = async (req, res) => {
    try {
        const { carId, sellerId } = req.body
        const carseller = new car_seller({
            carId,
            sellerId
        })
        const brandSaved = await carseller.save()
        res.status(201).json(brandSaved)
    } catch (err) {
        res.status(500).json({ message: err.message })

    }
}
const car = async (req, res) => {
    try {
        const { sName, brandId, sColor, sFuelType, nModel, dPrice } = req.body

        const FindBrand = await Brand.findOne({ brandId: brandId })

        if (!FindBrand) {

            return res
                .status(messages.status.statusNotFound)
                .json(messages.messages.brandIDNotFound)
        } else {
            const car = new Car({
                sName,
                brandId,
                sColor,
                sFuelType,
                nModel,
                dPrice
            })

            const carSaved = await car.save()
            res.status(201).json(carSaved)
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

const user = async (req, res) => {
    try {
        const { sUserName, sPassword, sRole, sCity } = req.body
        const UserFind = await User.findOne({ where: { sPassword: sPassword } })


        if (!sUserName || !sPassword || !sRole || !sCity) {
            return res
                .status(messages.status.badrequest)
                .json({ message: 'Enter the value' })
        }

        if (UserFind) {

            return res
                .status(messages.status.statusNotFound)
                .json(messages.messages.alreadyRegisteredUser)
        }
        else {
            const user = new User({
                sUserName,
                sPassword,
                sRole,
                sCity
            })
            const userSaved = await user.save()
            //console.log(userSaved);
            return res.status(messages.status.statusSuccess).json({ ...messages.messages.registeredSuccess, userSaved })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const login = async (req, res) => {
    try {
        const { sUserName, sPassword, sRole } = req.body
        const UserFind = await User.findOne({ where: { sUserName, sPassword, sRole } })
        if (UserFind) {
            const token = jwt.sign({ sUserName, sPassword, sRole }, secretKey, { expiresIn: '1h' })
            return res
                .status(messages.status.statusSuccess).json({ ...messages.messages.loginSuccess, token })
        }
        else {
            return res
                .status(messages.status.statusNotFound).json(messages.messages.userNotFound)
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
const seller_add = async (req, res) => {
    try {
        const { sSellerName, sCity, carId } = req.body

        const findCar = await Car.findOne({ carId: carId })
        console.log(carId)
        if (!findCar) {
            return res
                .status(messages.status.statusNotFound)
                .json(messages.messages.carIDNotFound)
        }
        else {
            const seller = new Seller({
                sSellerName,
                sCity,
                carId
            })
            const sellerSaved = await seller.save()
            res.status(201).json(sellerSaved)
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

}

const sell_car = async (req, res) => {
    try {

        const { sSellerName, sUserName, car } = req.body

        const carId = await Car.findOne({ where: { carId: car } })
        if (!carId) {
            return res
                .status(messages.status.statusNotFound)
                .json(messages.messages.carIDNotFound)
        }
        const sellerId = await Seller.findOne({ where: { sellerId: sSellerName } })
        if (!sellerId) {
            return res
                .status(messages.status.statusNotFound)
                .json(messages.messages.sellerIDNotFound)
        }

        const buyerId = await User.findOne({ where: { userId: sUserName } })
        console.log(buyerId)
        if (!buyerId) {
            return res
                .status(messages.status.statusNotFound)
                .json(messages.messages.userNotFound)
        }
        const transaction = new Transaction({
            sellerId: sSellerName,
            userId: sUserName,
            carId: car,
            sCity: buyerId.sCity
        })
        const Transaction1 = await transaction.save()
        res.status(201).json(Transaction1)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
}

const adminDash = async (req, res) => {
    try {

        const totalCarsSell = await Transaction.count()

        // max sell car

        const mostSellCar = await Transaction.findAll({
            attributes: [
                'carId',
                [Sequelize.fn('COUNT', 'carId'), 'count'],
            ],
            group: ['carId'],
            order: [[Sequelize.fn('COUNT', 'carId'), 'DESC']],
            limit: 1,
            // include: [{
            //     model: Car,
            //     attributes: ['sName'],
            // }],
        })

        // max city
        const mostCarSellCity = await Transaction.findAll({
            attributes: [
                'sCity',
                [Sequelize.fn('COUNT', 'sCity'), 'count']
            ],
            group: ['sCity'],
            order: [['count', 'DESC']],
            limit: 1
        })

       

        res.status(200).json({
            total_Cars_Sell: totalCarsSell,
            most_Car_Sell_City: mostCarSellCity,
            most_Sell_Car: mostSellCar,
            //most_Sell_Brand: mostSellBrand
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { brand, car, user, seller_add, login, sell_car, adminDash, car_seller_add }