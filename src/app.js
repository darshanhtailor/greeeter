const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require("uuid");

const app = express()
app.set('view engine', 'hbs')

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended: false})
const port = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.redirect(`${uuidv4()}`)
    res.render('index')
})

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params.room })
});

app.listen(port, ()=>{
    console.log('Server started')
})