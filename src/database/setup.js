const client = require("./connection")
const {createItemTable,createOrganizationTable,createPricingTable} = require("./query")

async function dbMigration(){
    try{
        await client.connect()
        await client.query(createItemTable)
        await client.query(createOrganizationTable)
        await client.query(createPricingTable)
       
      
    }catch(e){
        console.log(e)
    }
}

module.exports = dbMigration