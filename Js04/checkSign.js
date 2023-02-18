var n = 0;
function checkSign (n) {
    if (n<0) {
        console.log('Negatif');
    }
    else{
        console.log('Positif');
    }
}
checkSign(-1);
checkSign(1);
checkSign(0);

module.exports = checkSign;