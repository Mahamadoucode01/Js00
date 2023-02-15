// Créer un objet personne avec des propriétés suivant : son nom Mariam et 30ans d'âge, et écrire une fonction qui affiche ces informations 

let personne = {
    'nom' : 'Mariam',
    'age' : '30',
};
function displayPersonInfo(){
    console.log(`nom: ${personne.nom}`);
    console.log(`Age: ${personne.age}`);
};
displayPersonInfo();