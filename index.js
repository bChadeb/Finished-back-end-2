const express = require('express')
const path = require('path');

const app = express()


app.use(express.json())
app.use(express.static(__dirname + '/static'));

const ctrl = require('./controller.js')

app.get('/', (req, res) => {
    res.sendFile('static/index.html', {root: __dirname});
})

app.get(`/api/houses`, ctrl.getHouses)
app.post(`/api/houses`, ctrl.createHouse)
app.delete(`/api/houses/:id`, ctrl.obliterateHouse)
app.put(`/api/houses/:id`, ctrl.screwYouYoureNotBuyingThisHouse)

app.listen(4000, () => console.log(`My balls are running on port 4000`))