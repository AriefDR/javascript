function pangilRegex() {
    let str = "abcdefghijklmnopqrstuvwxyz - A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
    kotak1 = str.match(/c/g)
    kotak2 = str.match(/C/g)
    var hasil1 = kotak1.concat(kotak2); // menggabungkan 2 array

    return hasil1
}

function pangilRegexs() {
    let str = "abcdefghijklmnopqrstuvwxyz - A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
    kotak1 = str.match(/k/g)
    kotak2 = str.match(/K/g)
    var hasil1 = kotak1.concat(kotak2); // menggabungkan 2 array

    return hasil1
}

function pangilRegexsa() {
    let str = "abcdefghijklmnopqrstuvwxyz - A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
    kotak1 = str.match(/l/g)
    kotak2 = str.match(/L/g)
    var hasil1 = kotak1.concat(kotak2); // menggabungkan 2 array

    return hasil1
}
console.log(pangilRegex());
console.log(pangilRegexs());
console.log(pangilRegexsa());