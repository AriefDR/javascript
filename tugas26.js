function checkInfinite(x){
    for(i = 0; i < x.length; i++){
        if (isFinite(x[i]) != true)
            console.log("Angka " + x[i] + " Infinity");
        else
            console.log("Angka " + x[i] + " Not Infinity");
    }
}
var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
checkInfinite(angka);