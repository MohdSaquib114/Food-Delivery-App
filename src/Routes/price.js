const express = require("express")
const {priceController} =  require("../utiliy/controller")
const {pricePayLoadChecker}  = require("../utiliy/middlewares")

const route = express.Router()

route.get("/price",pricePayLoadChecker,priceController)

module.exports = route