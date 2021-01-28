const data= [1,2,3,4];
const reducer = (acumulator, currentValue) => acumulator + currentValue;

console.log(data.reduce(reducer))