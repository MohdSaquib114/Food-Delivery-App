const express = require("express")
const dbMigration = require("./database/setup")
require("dotenv").config()
const client = require("./database/connection")
const route = require("./Routes/route")
const app =  express()

app.use(express.json())
dbMigration()

app.use("/api/v1/", route )

const PORT = process.env.PORT || 4040

app.listen(PORT)