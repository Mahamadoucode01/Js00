function displayCaracter(n){
    let D = 'B'
for( let i=1; i<=n; i++){
    if(i%2 != 0){
        console.log('A');
    }else {
        console.log(D);
        if( D == 'B')
            D = 'C'
        else
            D = 'B'
    }
}
}

displayCaracter(8)

module.exports=displayCaracter