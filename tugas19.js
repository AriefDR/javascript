function ulang(x){
    console.log(x.repeat(4))
}

function bintang(x){
    var i = 0;
    var tp = 5;
    do{
        if (i > 0) 
            tp+= 20;
        console.log(x.repeat(tp));
        i++;
    }while(i < 5);
    
    do{
        tp = Math.abs(tp-20);
        console.log(x.repeat(tp));
        i--;
    }while(i > 1)
    
}

var sg = "Semangat..."
var btg = "*";
ulang(sg);
bintang(btg);