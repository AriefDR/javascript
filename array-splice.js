function panggilSplice(){
    var kota  = ['jakarta','medan','malang']
    console.log(kota)
    kota.splice(1,3,'pwt')
    return kota
}
console.log(panggilSplice())