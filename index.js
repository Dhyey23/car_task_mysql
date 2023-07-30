const express = require('express')
const app = express()
require('dotenv').config()


require('./app/database/dbconnect')
//const  sequelize = db.sequelize


app.use(express.json())

app.use('/',require('./app').routes)


app.listen(process.env.port, () => {
    console.log('Server started on port ' + process.env.port)
})

