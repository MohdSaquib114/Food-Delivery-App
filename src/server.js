const express = require("express")
const dbMigration = require("./database/setup")
const client = require("./database/connection")
const route = require("./Routes/route")
const swaggerUi = require('swagger-ui-express');
const apiDocument = require("./api-document/swagger.json")
require("dotenv").config()
const app =  express()

app.use(express.json())
dbMigration()

app.use("/api/v1/", route )
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocument));

const PORT = process.env.PORT || 4040

app.listen(PORT,()=>console.log(`Server is running on Port number ${PORT}`))