const houses = require(`./db.json`)
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const body = req.body

        const newHouse = {
            id: globalId,
            address: body.address,
            price: +body.price,
            imageURL: body.imageURL
        }

        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },
    obliterateHouse: (req, res) => {
        const id = req.params.id

        const index = houses.findIndex(home => {
            return home.id === +id
        })

        houses.splice(index, 1)

        res.status(200).send(houses)
    },
    screwYouYoureNotBuyingThisHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        const index = houses.findIndex(home => {
            return home.id === +id
        })
        if(houses[index].price < 10000 && type === 'minus'){
            res.status(400).send('Get more money')
        } else if(type === 'plus'){
            houses[index].price = houses[index].price + 10000
            res.status(200).send(houses)
        } else if(type === 'minus'){
            houses[index].price = houses[index].price - 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }

    }
}