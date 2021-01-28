function ubahKata(x){
    console.log(x.toLowerCase());
    console.log(x.toUpperCase());
}

function hurufASCII(x){
    console.log(x.charCodeAt(0) + "-" + x.charCodeAt(1) + "-" +x.charCodeAt(2) + "-" + x.charCodeAt(3) + "-" + x.charCodeAt(4) + "-" + x.charCodeAt(5));
}

var kata1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
var kata2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";

ubahKata(kata1);
ubahKata(kata2);

var kata3 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum hasil running "
hurufASCII(kata3);