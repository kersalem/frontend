//alert('toto');


var array = [
  {
    nom : "Espagne",
    source :"../images/espagne.jpeg",
    commentaire: "L'Espagne Lorem Ipsum est simplement du faux texte employé dans les années 1500, quand un imprimeur anonyme assembla ende polices de.",
    prix: "1300",
    offre: "50",
  },
  {
    nom : "Argentine",
    source :"../images/argentine.png",
    commentaire: "L'argentine très connu pour Lorem du faux texte employé dans les années 1500, quand un imprimeur anonyme assembla ende polices de.",
    prix: "2300",
    offre: "20",
  },
  {
    nom : "Namibie",
    source :"../images/namibie.jpeg",
    commentaire: "La namibie très connu pour Lorem dans les années 1500, quand un imprimeur anonyme assembla ende polices de.",
    prix: "3000",
    offre: "10%",
  }
];


var resultat="";

array.forEach(function(element){
  //console.log('element.nom', element.nom);
  resultat = resultat + "<tr>";
  resultat =  resultat + "<td>" + element.nom + "</td>";
  resultat =  resultat + "<td><img src=" + element.source + "/></td>";
  resultat =  resultat + "<td class='test'>" + element.commentaire + "</td>";
  resultat =  resultat + "<td>" + element.prix + "</td>";
  resultat =  resultat + "<td>" + element.offre + "</td>";
  resultat =  resultat + '<td><input type="button" value="Découvrir"></td>';
  resultat =  resultat + '<td><input type="button" id="button" value="Modifier"></td>';
  //console.log('element.source', element.source);
});
document.getElementById("tbody").innerHTML = resultat;

document.getElementById("button").addEventListener("click", modifierCommentaire);

function modifierCommentaire(e) {
  console.log(e);
  console.log(e.target.parentNode.parentNode)
  inputCommentaire = document.getElementById("commentaire").value;
  console.log('inputCommentaire', inputCommentaire);


  console.log('test', test);

}

//ModifierCommentaire();
