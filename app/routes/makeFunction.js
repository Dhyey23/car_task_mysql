const Brand = require('../schema/brandSchema')
const Car = require('../schema/carsSchema')
const User = require('../schema/usersSchema')
const Seller = require('../schema/sellersSchema')
const Transaction = require('../schema/transactionsSchema')

// const jwt = require('jsonwebtoken')
// const messages = require('../message')
// const secretKey = 'dhyey'

async function getAllcar() {

    const brandName = await Brand.findAll({ include: [Car] })

    return brandName

}

///////////// many to many/////////
async function getAllCars() {

    const car = await Car.findAll({
        include: [
            {
                model: Seller,
                // attributes: ['First_Name', 'Last_Name'],
                through: {
                    as: 'car and seller Data',
                    attributes: ['carId', 'sellerId']
                    //attributes:[]
                }
            }
        ]
    })

    return car

}
module.exports ={getAllcar, getAllCars}