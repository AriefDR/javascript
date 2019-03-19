function panggilPerintahMap() {
    var dataKota = ["jakrta", "balikpapan", "meda"];
    dataKota.map((item, index, array) => { // sebuah fungsi baru dlm js
        console.log(item);
        console.log(index);
        console.log(array);
    });
    
}

panggilPerintahMap();