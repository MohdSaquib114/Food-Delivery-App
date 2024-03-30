const createOrganizationTable  = `
 CREATE TABLE IF NOT EXISTS organization (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
 );
`
const createItemTable = `

CREATE TABLE IF NOT EXISTS item (
    id          SERIAL PRIMARY KEY,
    type        ENUM ('perishable','non-perishable'),
    description TEXT
 );
`
const createPricingTable = `
CREATE TABLE IF NOT EXISTS pricing (
    organization_id INT,
    item_id INT,
    zone VARCHAR(255) NOT NULL,
    base_distance_in_km INT NOT NULL,
    fix_price DECIMAL(10,2) NOT NULL,
    km_price DECIMAL (10,2) NOT NULL,
    PRIMARY KEY (organization_id,item_id,zone),
    FOREIGN KEY (organization_id) REFERENCES Organization(id),
    FOREIGN KEY (item_id) REFERENCES Item(id)
);
`

module.exports = {
    createOrganizationTable,
    createItemTable,
    createPricingTable
}