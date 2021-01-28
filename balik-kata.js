
function balikKata(kata) {
    // return kata.split("").reverse().join("");
    var arr = [];
    for(i = kata.length-1; i >= 0; i--){
        arr.push(kata[i]);
    }
    return arr.toString().replace(/,/g, "");

   }
   
   // testCase
   console.log(balikKata("Niomic!"))    
   console.log(balikKata("JavaScript"))  
   console.log(balikKata("alohahola"))  
   console.log(balikKata("Jawa_Barat")) 