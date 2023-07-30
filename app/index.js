const express = require('express')
const routes = express.Router()
const controller = require('./routes/controller')
const controller2 = require('./routes/controller2')
const { authenticateToken, isAuthorized } = require('./routes/middleware')
const { checkCity } = require('./routes/middleware')

routes.post('/brand', controller.brand)
routes.post('/car', controller.car)
routes.post('/user', controller.user)
routes.post('/seller', controller.seller_add)
routes.post('/carseller', controller.car_seller_add)
routes.post('/login', controller.login)
routes.post('/sellCar', checkCity, controller.sell_car)
routes.get('/admin', authenticateToken, isAuthorized, controller.adminDash)

//////// controller 2
routes.get('/cardata', controller2.carData)
routes.get('/allcar', controller2.allCar)

module.exports = { routes }