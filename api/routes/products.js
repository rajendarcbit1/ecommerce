const express = require('express')
const router = express.Router()
const Product = require('../model/Product')

router.get('/', async (req, res) => {
    const getProducts = await Product.find({})
    return res.status(200).json(getProducts)
})

// Create Product
router.post('/create', async (req, res) => {
    const product = new Product({
        item_code: Math.random().toString(36).substring(5),
        name: req.body.name,
        desc: req.body.desc,
        img: req.body.img,
        price: req.body.price
    })
    try {
        const saved = await product.save()
        return res.status(200).json(saved)
    } catch(err) {
        return res.json(err)
    }
})

module.exports = router