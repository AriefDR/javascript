function makanan(){
    var buah = ['Pisang', 'Jeruk', 'Aple', 'Mangga'];
    console.log(buah);
    buah.pop();
    console.log(buah);
    buah.shift();
    return buah
}
console.log(makanan());