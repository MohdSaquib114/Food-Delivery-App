


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
const get_item = `
SELECT * FROM item
`
const post_item = `
INSERT INTO item (type,description) VALUES ($1,$2);
`

const update_item = `
UPDATE item SET type=$1, description=$2 WHERE id=$3
`

const get_organization = `
SELECT * FROM organization
`
const post_organization = `
INSERT INTO organization (name) VALUES ($1);
`

const get_pricing = `
SELECT * FROM pricing;
`

const post_price = `
INSERT INTO pricing (organization_id,item_id,zone,base_distance_in_km,km_price,fix_price) VALUES ($1,$2,$3,$4,$5,$6);
`
const put_price = `
UPDATE  pricing SET zone=$3,base_distance_in_km=$4,km_price=$6,fix_price=$6 WHERE organization_id=$1 AND item_id=$2  AND zone=$3 ;
`

module.exports = {
    price_query,
    get_item,
    update_item,
    post_item,
    get_organization,
    post_organization,
    get_pricing,
    post_price,
    put_price
}