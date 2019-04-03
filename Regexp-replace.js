function panggilRegexp() {
    var j = 0;
    let data = 'belajar-satu-tahun-bersama-niomic';
    if (data.match(/-/g)) {
        console.log(data.replace(/-/g, " "))
    }
}

panggilRegexp()