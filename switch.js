function testswittch(){
    var score = 10

    switch(score){
        case 10:
        console.log("Perfect")
        break;
        case 8:
        console.log("Good")
        break;
        case score < 8 && score > 6:
        console.log("Not Bad")
        break;
        default:
        console.log("Bad")
    }
}
testswittch()