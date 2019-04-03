function panggilRegex(value) {
    if (/html/.test(value) || /css/.test(value)) {
        console.log(value)
    } else {
        console.log("Belajar");
    }

}

panggilRegex("Belajar html");
panggilRegex("Belajar javascript");
panggilRegex("Belajar css");
panggilRegex("Belajar php");