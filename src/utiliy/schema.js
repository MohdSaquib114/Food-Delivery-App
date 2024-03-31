const zod= require("zod")

const pricePayLoadSchema = zod.object({
    zone : zod.string(),
    organization_id:zod.number(),
    total_distance:zod.number(),
    item_type:zod.string()
})

const itemSchema = zod.object({
    id:zod.number(),
    type:zod.string(),
    description:zod.string()
})
const itemPostSchema = zod.object({
    
    type:zod.string(),
    description:zod.string()
})
const orgPostSchema = zod.object({
    name:zod.string()
})

const pricingSchema = zod.object({
    organization_id:zod.number(),
     item_id:zod.number(),
      zone:zod.string(),
       base_distance_in_km: zod.number(),
        km_price: zod.number(),
     fix_price: zod.number()
})

module.exports = {
    pricePayLoadSchema,
    itemSchema,
    itemPostSchema,
    orgPostSchema,
    pricingSchema
}