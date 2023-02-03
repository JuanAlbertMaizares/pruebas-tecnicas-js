// Ordenar segun price de forma asc
// Si tienen el mismo price, ordenar ASC alfabeticamente

const productsStr = '[{"name": "coffee","price": 4.00}, {"name": "orange", "price": 4.56}, {"name": "lemon", "price": 34.2}, {"name": "meat", "price": 45.4}, {"name": "water bottle", "price": 25.5}]';

const listProds = JSON.parse(productsStr);

const final = listProds.sort(function(a, b) {
    if (a.price == b.price) {
        return a.name - b.name
    } 
    return a.price - b.price
});

console.log(final);
 