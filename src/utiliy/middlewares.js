const {pricePayLoadSchema} = require("./schema")


function pricePayLoadChecker(req,res,next){
    try{

        const result = pricePayLoadSchema.safeParse(req.body)
        if(!result.success){
            res.status(400).json({
                error:result.error
            })
            return
        }
       
        next()
       
    }catch(e){
        res.status(500).json({
            erorr:e.message
        })
    }
}

module.exports = {
    pricePayLoadChecker
}