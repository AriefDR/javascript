
function panggilRegexp(value) {
    //var ambilData = value.match(/ke/g); // menaggil karakter ke
    //var ambilData = value.match(/[ke]/g); // mengambil semua “k” dan karakter “e” pada sebuah variable string
    //var ambilData = value.match(/[^ke]/g); // mengambil karakter KECUALI karakter tertentu
    var ambilData = value.match(/[a-i]/g); // mengambil karakter dari a- i harus seuai abjad
    console.log(ambilData);
   }
   
   panggilRegexp("Bulan ke 1 sd ke 4");