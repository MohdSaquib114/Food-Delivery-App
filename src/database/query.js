


const price_query = `
SELECT base_distance_in_km, km_price, fix_price 
FROM pricing 
WHERE 
zone=$1 AND organization_id=$2 AND
item_id IN ( SELECT id 
    FROM
    item WHERE 
    type=$3
    )

`
module.exports = {
    price_query
}