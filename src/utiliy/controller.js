const  client = require("../database/connection")
const {centsToDollars} = require("./utility")
const {price_query} = require("../database/query")

async function priceController(req,res){
    try{

        
        const {zone,organization_id,total_distance,item_type} = req.body
        
        const {rows} = await client.query(query,[zone,organization_id,item_type])
        
        const {base_distance_in_km, km_price, fix_price} = rows[0]
        
        let total_price = fix_price
        
        if(total_distance > base_distance_in_km )
        {
  total_price+= (total_distance - base_distance_in_km ) * centsToDollars(km_price)
}


res.status(200).json({
    total_price:total_price
})

}catch(e){
    res.status(404).json({error:e.message})
}
}

module.exports ={
    priceController
}