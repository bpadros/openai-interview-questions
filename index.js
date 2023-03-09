const path = require('path')
const express  = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 9000

const app = express()

//Enable body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//set static folder
app.use(express.static(path.join(__dirname,'public')))


app.listen(port, () => console.log(`Server start on port ${port}`))

app.use('/openai', require('./routes/openAiRoutes'))