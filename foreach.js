function panggilForeach(){
    var data = ['a','b','c'];
    data.forEach(function(item,index,array){ // boleh diganti
        console.log(item)
        console.log(index)
        console.log(array)
    })
}

console.log(panggilForeach())