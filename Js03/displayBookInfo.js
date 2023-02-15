// Créer un objet book représentant le livre L'Enfant Noir de Camara Laye publié en 1953, et écrire une fonction qui affiche ces informations
let book = {
    'title': "L'enfant Noir",
    'auteur' : "Camara Laye",
    'annee' : "1953",
};
function displayBookInfo(){
    console.log('Titre:', book.title);
    console.log('Auteur:', book.auteur);
    console.log('Année:', book.annee);
};
displayBookInfo();