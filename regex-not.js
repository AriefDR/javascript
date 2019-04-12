function panggilRegexp(value) {
    //var ambilData = value.match(/\W/g) // W-> capital Untuk mengambil semua karakter KECUALI huruf dan angka.
    //var ambilData = value.match(/\D/g) // W-> capital Untuk mengambil semua karakter KECUALI huruf dan angka.
    var ambilData = value.match(/\S/g) // W-> capital Untuk mengambil semua karakter KECUALI space.
    console.log(ambilData)
 }
 
 panggilRegexp("Bulan ke 1 sd ke 4");