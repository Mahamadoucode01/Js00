var a = 0;
    a <=10;
function checkNumber(a){
    if(a<5){
        console.log('Faible');
    }
    else if (a==5 || a==6){
        console.log('Moyen');   
    }
}
checkNumber(3);
checkNumber(5);
checkNumber(6);

module.exports=checkNumber