const express = require("express")
const dbMigration = require("./database/setup")
require("dotenv").config()
const client = require("./database/connection")
const app =  express()

app.use(express.json())
dbMigration()

app.post('/',async (req,res)=>{
    
    const {type,description} = req.body
    const value = [type,description]
    const data = await client.query(`INSERT INTO item (type,description) VALUES($1,$2) RETURNING type,description`,value)
    res.json({
        data:data
    })

})

const PORT = process.env.PORT || 4040

app.listen(PORT)