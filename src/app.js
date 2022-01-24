const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/getdevice', (req, res)=>{

})

app.listen(port, ()=>{
    console.log('Server started')
})