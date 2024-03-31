const zod= require("zod")

const pricePayLoadSchema = zod.object({
    zone : zod.string(),
    organization_id:zod.number(),
    total_distance:zod.number(),
    item_type:zod.string()
})

module.exports = {
    pricePayLoadSchema
}