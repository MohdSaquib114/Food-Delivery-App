const  client = require("../database/connection")
const {centsToDollars, dollarsToCents} = require("./utility")
const {price_query,get_item,update_item,get_organization,post_item, post_organization, get_pricing, post_price, put_price} = require("../database/query")

async function priceController(req,res){
    try{

        
        const {zone,organization_id,total_distance,item_type} = req.body
        
        const {rows} = await client.query(price_query,[zone,organization_id,item_type])
        
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

async function getItem(req,res){
    try{

        const items = await client.query(get_item)
        res.status(200).json({
            item:items.rows
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}

async function postItem(req,res){
    try{
const {type,description} = req.body
        const items = await client.query(post_item,[type,description])
        res.status(200).json({
            message:"Posted"
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}

async function updateItem(req,res){
    try{
        const {id,type,description} = req.body
        await client.query(update_item,[type,description,id])
        res.status(200).json({
            message:"updated"
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}
async function getOrganization(req,res){
    try{

        const items = await client.query(get_organization)
        res.status(200).json({
            item:items.rows
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}
async function postOrganization(req,res){
    try{
  
        const items = await client.query(post_organization,[req.body.name])
        res.status(200).json({
           message:"Posted"
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}

async function postPrice(req,res){
    try{
      const {organization_id,item_id,zone,base_distance_in_km,km_price,fix_price} = req.body
      const km_price_cent = dollarsToCents(km_price)
        const items = await client.query(post_price,[organization_id,item_id,zone,base_distance_in_km,km_price_cent,fix_price])
        res.status(200).json({
           message:"Posted"
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}
async function putPrice(req,res){
    try{
      const {organization_id,item_id,zone,base_distance_in_km,km_price,fix_price} = req.body
      const km_price_cent = dollarsToCents(km_price)
        const items = await client.query(put_price,[organization_id,item_id,zone,base_distance_in_km,km_price_cent,fix_price])
        res.status(200).json({
           message:"Posted"
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}
async function getPricing(req,res){
    try{

        const items = await client.query(get_pricing)
        res.status(200).json({
            item:items.rows
        }  )
    }catch(e){
        
        res.status(400).json({
            erorr:e.message
        }  )
    }
}
module.exports ={
    priceController,
    getItem,
    postItem,
    updateItem,
    getOrganization,
    postOrganization,
    getPricing,
    postPrice,
    putPrice

}