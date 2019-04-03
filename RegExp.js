function panggiRegexp() {
    let str = "bcdaefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
    // return str.search(/a/);
    // console.log(str.search(/K/))
    // console.log(str.search(/K/i))
    // console.log(str.search(/k/i))

    //flags g
    console.log(str.match(/c/g));   
}

panggiRegexp()