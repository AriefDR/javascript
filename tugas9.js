function motor(){
    var motors = {
        nama : "bmw",
        harga : 2000000,
        tahun : 2019
    }
    for(var x in motors)
        console.log(motors[x])
}

motor()