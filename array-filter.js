let peoples = [
    {
        name : "Arief",
        gender: "Laki-laki"
    },
    {
        name : "Yuvita",
        gender : "Perempuan"
    }
];

let female = peoples.filter(people =>{
    return people.gender === "Perempuan"
});

console.log(female);