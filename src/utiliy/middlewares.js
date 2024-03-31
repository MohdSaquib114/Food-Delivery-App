const {pricePayLoadSchema,itemSchema, itemPostSchema, orgPostSchema, pricingSchema} = require("./schema")


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

function itemPutMiddleware (req,res,next){
    try{

        const result = itemPostSchema.safeParse(req.body)
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
function itemPostMiddleware (req,res,next){
    try{

        const result = itemPostReqSchema.safeParse(req.body)
       
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
function orgPostMiddleware (req,res,next){
    try{

        const result = orgPostSchema.safeParse(req.body)
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
function priceMiddleware (req,res,next){
    try{

        const result = pricingSchema.safeParse(req.body)
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
    pricePayLoadChecker,
    itemPutMiddleware,
    itemPostMiddleware,
    orgPostMiddleware,
    priceMiddleware
}