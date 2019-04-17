const express = require('express');
const hbs = require('hbs');
const path = require('path')
let { players } = require('./helpers/playerData')

const app = express()

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.use(express.static(path.join(__dirname, 'public')))

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/players', (req, res) => {
  res.render('players', { players })
})

app.get('/teams', (req, res) => {
  let data = {
    layout: false
  }
  res.render('teams', data)
})


let PORT = 8080
app.listen(PORT, () => console.log(`Corriendo en el puerto ${PORT}`))