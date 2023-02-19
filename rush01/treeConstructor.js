function TreeConstructor(strArr) {
    const children = {};
    const parents = {};
  
    // Parcours du tableau strArr
    for (let i = 0; i < strArr.length; i++) {
      // Extraction du nœud enfant et du nœud parent
      const [child, parent] = strArr[i].replace(/[()]/g, '').split(',');
  
      // Si le nœud enfant est déjà lié à un parent, on retourne false
      if (children[child] !== undefined) {
        console.log(false);
      }
  
      // Si le nœud parent a déjà deux enfants, on retourne false
      if (parents[parent] !== undefined && parents[parent].length === 2) {
        console.log(false);
      }
  
      // Liaison entre le nœud enfant et le nœud parent
      children[child] = parent;
      if (parents[parent] === undefined) {
        parents[parent] = [];
      }
      parents[parent].push(child);
    }
  
    // Vérification que chaque nœud a au plus un parent
    for (const child in children) {
      const parent = children[child];
      if (parents[parent].indexOf(child) === -1) {
        console.log(false);
      }
    }
  
    // Si toutes les vérifications passent, on a un arbre binaire valide
    console.log(true);
  }

  TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]);

  mudule.exports=TreeConstructor