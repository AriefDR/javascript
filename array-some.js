let products = [
    {name:"Apple", type: "fruit"},
    {name:"Monitor", type: "komputer"},
    {name:"Malon", type: "fruit"},
    {name:"Table", type: "furniture"},
];

console.log(products.some(product => product.type === "fruit"))