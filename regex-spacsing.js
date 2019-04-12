function panggilRegex(value){
   // var ambilData = value.match(/\w/g) // ambil seluruh kata di jadikan char
    //var ambilData = value.match(/\d/g) // ambil decimal / angka saja
    var ambilData = value.match(/\s/g) // ambil sapsi

    console.log(ambilData)
    console.log("banyak spasi: ", ambilData.length)

}
panggilRegex("bulan ke 1 sampai ke 4")