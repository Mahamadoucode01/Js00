var a = 0;
function checkEvenOdd(a){
    if(a%2==0){
        console.log('Pair');
    }
    else{
        console.log('Impair');
    }
}
checkEvenOdd(45);
checkEvenOdd(22);

module.exports=checkEvenOdd;