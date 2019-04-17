const express = require('express');
const hbs = require('hbs');
const path = require('path')

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {

  let data = {
    name: "Xavier",
    profession: "NinjaTA",
    age: 28,
    married: true,
    address : {
      calle: "Olivo",
      colonia: "San José"
    },
    cities: ['NY', 'San Francisco', 'Florida', 'Tokio', 'Vancouver', 'Cd. Neza']
  }

  res.render('index', data)
})

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Estamos corriendo en el puerto ${PORT}`)
})




