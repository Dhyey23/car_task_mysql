const Brand = require('../schema/brandSchema')
const Car = require('../schema/carsSchema')
const User = require('../schema/usersSchema')
const Seller = require('../schema/sellersSchema')
const Transaction = require('../schema/transactionsSchema')
const car_seller = require('../schema/CarSellerSchema')

const jwt = require('jsonwebtoken')
const secretKey = 'dhyey'
const messaeges = require('../message')



function authenticateToken(req, res, next) {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(messaeges.status.Forbidden).json(messaeges.messages.unAuthorized)
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        // console.log(token)
        if (err) {

            return res.status(messaeges.status.Forbidden).json(messaeges.messages.unAuthorized)
        }

        req.decoded = decoded
        console.log(req.decoded)
        next()

    })
}

function isAuthorized(req, res, next) {

    let sRole = req.decoded.sRole
    // console.log(sRole)
    if (sRole === 'admin') {
        return next()
    }
    else {

        return res.status(403).json({ error: 'you are not Admin' })
    }
}


const checkCity = async (req, res, next) => {
    try {
        const { sSellerName, sUserName } = req.body

        const sellerCity = await Seller.findOne({ where: { sellerId: sSellerName } })
        //console.log(sellerCity)
        const buyerCity = await User.findOne({ where: { userId: sUserName } })
        //console.log(buyerCity)
        if (sellerCity.city === buyerCity.city) {
            // if(buyerCity=city){
            next()
            //}
        }
        else {
            return res.status(403).json({ error: 'city not match' })

        }

    } catch (err) {
        return res
            .status(messaeges.status.statusNotFound)
            .json(messaeges.messages.IDNotFound)
    }
}


module.exports = { authenticateToken, isAuthorized, checkCity }