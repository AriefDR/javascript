function sorting(x,y = "asc"){
    var angka = x.sort()
    if(y == "desc")
        angka.reverse();

    return angka;
}
var arr = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
console.log("Sebelumnya : " + arr);
console.log("Ascending : " + sorting(arr));
console.log("Descending : " + sorting(arr, "desc"));