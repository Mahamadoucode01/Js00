function printBox(width, height) {
    // imprimer la première ligne
    let ligne1 = "*".repeat(width);
    console.log(ligne1);
    
    // imprimer les lignes intermédiaires
    for (let i = 0; i < height - 2; i++) {
      let ligne2 = "*" + " ".repeat(width - 2) + "*";
      console.log(ligne2);
    }
  
    // imprimer la dernière ligne
    if (height > 1) {
      let ligne3 = "*".repeat(width);
      console.log(ligne3);
    }
  }

printBox(5, 4);

module.exports=printBox