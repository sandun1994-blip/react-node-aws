const bodyParser = require('body-parser')
const express = require('express')

const morgan = require('morgan')

const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express() 


//Routesn  
const authRoutes = require('./routes/auth')

app.use(morgan('dev'))

app.use(bodyParser.json())

app.use(cors())

//Middleware

app.use('/api', authRoutes)

const port =process.env.PORT || 6000
app.listen(port, () => {
    console.log(`app listen port ${port}`);
})