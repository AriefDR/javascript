function segitiga(x,y){
    var ab = Math.pow(x, 2);
    var ac = Math.pow(y, 2);

    console.log("Nilai AB : ", x);
    console.log("Nilai BC : ", y);

    return (Math.sqrt(ab+ac))
}

console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah", segitiga(8,6) + " cm");