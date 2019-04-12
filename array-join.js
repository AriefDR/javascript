function panggilJoin() {
    var kota = ["Jakrta", "Medan", "Surabaya", "Papua"];
    console.log(kota);

    var res = kota.join(","); // mengubah array menjadi string
    return res
}

console.log(panggilJoin())