const route = require("express").Router()
const {getOrganization,postOrganization } = require("../utiliy/controller")
const {orgPostMiddleware} = require("../utiliy/middlewares")

route.get('/',getOrganization)

route.post("/",orgPostMiddleware,postOrganization)





module.exports = route