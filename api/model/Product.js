const mongoose = require('mongoose')

const ProductsSchema =  mongoose.Schema({
    item_code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})  

module.exports = mongoose.model('Product', ProductsSchema)