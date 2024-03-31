const express = require("express")
const {priceController, getPricing, postPrice, putPrice} =  require("../utiliy/controller")
const {pricePayLoadChecker, priceMiddleware}  = require("../utiliy/middlewares")

const route = express.Router()

route.get("/calculate",pricePayLoadChecker,priceController)
route.get("/",getPricing)
route.post("/",priceMiddleware,postPrice)
route.put('/',priceMiddleware,putPrice)

module.exports = route