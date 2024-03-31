const route = require("express").Router()
const {getItem,updateItem ,postItem } = require("../utiliy/controller")
const {     itemPutMiddleware,
    itemPostMiddleware} = require("../utiliy/middlewares")

route.get('/',getItem)

route.post('/',itemPostMiddleware,postItem)

route.put('/',itemPutMiddleware,updateItem)


module.exports = route