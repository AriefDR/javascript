function minMax(){
    var arr1 = Math.min(45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10)
    var arr2 = Math.max(45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10)
    console.log("Nilai minimal : ", (arr1));
    console.log("Nilai maximal : ", (arr2));
    arr1 = Math.min(45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5)
    arr2 = Math.max(45, 100, 99, 3, 2, 81, 22, 55, 1, 2, 3, 4, 5)
    console.log("Nilai minimal : ", (arr1));
    console.log("Nilai maximal : ", (arr2));
}

minMax()