// Ecrire une function qui affichera "Codeloccol Campers" dans la console en vous servant de l'objet de l'exercice precedant. 
const codeloccol = {
  name: 'Coder',   
  legs: 4,
  tails: 1,  
  friends: ['Codeloccol Campers'],
};
function displayCompers(){
  
  console.log("'" + codeloccol.friends + "'")
};
displayCompers();