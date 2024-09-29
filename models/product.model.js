const mongoose = require('mongoose')


module.exports = mongoose.model('Product', {
  title: String,
  catogry: String,
  qty: Number,
  price: Number,
  image:String

})