require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

//Engine
app.set('views', './views/')
app.set('view engine', 'ejs')

//Public
app.use(express.static(path.join(__dirname, '/public')))

//Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())

//Routes
const router = express.Router()
const routes = require('./routes/routes.js')
routes.run(router, app)

app.listen(process.env.PORT, () => {
  console.log('Aplicação rodando na porta: ' + process.env.PORT)
})
