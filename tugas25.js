function sorting(x,y = "asc", z = null){
    var angka = x.sort()
    if(y == "desc")
        angka.reverse();
    if (z == "filter"){
        angka = angka.filter(asd =>{
            return asd > 10;
        });
    }
    return angka;
}
var arr = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
console.log("Sebelumnya : " + arr);
console.log("Ascending : " + sorting(arr));
console.log("Descending : " + sorting(arr, "desc"));
console.log("Descending : " + sorting(arr, "desc", "filter"));