const route = require("express").Router()
const priceRoute =require("./price")
const itemRoute = require("./item")
const orgRoute = require("./organization")
route.use("/price",priceRoute)
route.use("/item",itemRoute)
route.use("/org",orgRoute)

module.exports=route