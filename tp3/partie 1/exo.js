
//exercice 1 partie 1
//////////////////////////////////////////////////////// Structures de contrôle et boucles

//var result = window.prompt("choisssez un chiffre");
var random = Math.floor(Math.random() * 10) + 1;
var compteur = 0;

  // function choixNombre(){
  //   //alert(prompt("Choisissez nombre"));
  //       console.log('result', result);
  //       console.log('random', random);
  //       console.log('compteur', compteur);
  //
  //         while(result != random) {
  //
  //           if(compteur < 3) {
  //Tableaux et gestion d’évènements
  //             if(result > random) {
  //               compteur+=1;
  //               console.log('compteur if', compteur);
  //               result = window.prompt("Votre nombre est trop grand!");
  //             } else if (result < random) {
  //               compteur+=1;
  //               console.log('compteur else', compteur);
  //               result = window.prompt("Votre nombre est trop petit!");
  //             }
  //           } else {
  //               alert("VOus n'avez pas d'essai suplémentaire");
  //           }
  //         }
  //
  //         compteur+=1;
  //         alert("Gagné! en " + compteur + "coups!");
  // }

// permet de lancer la method une fois que tout est chargé
//window.addEventListener("load",choixNombre);

//////////////////////////////////////// Tableaux et gestion d’évènements

  // window.addEventListener("load",distribAction);
  //
  // var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
  // var Italie = ["Rome", "Milan", "Florence", "Venise"];
  // var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
  // var Espagne = ["Barcelone", "Valencia", "Albacet", "Cadix"];
  //
  // function distribAction() {
  //   document.getElementById("myBtn").addEventListener("click", promptPays);
  // }
  //
  // function promptPays(event) {
  //   var input = document.getElementById("recuperationChamp").value;
  //   console.log('recupResultInput',input);
  //
  // if(Congo.includes(input)){
  //   result = alert("Bienvenue au Congo");
  // } else if (Italie.includes(input)) {
  //   result = alert("Bienvenue en Italie");
  // } else if (Irlande.includes(input)) {
  //   result = alert("Bienvenue en Irlande");
  // } else if (Espagne.includes(input)) {
  //   result = alert("Bienvenue en Espagne");
  // } else {
  //   event.preventDefault();
  // }
  //
  // }

//Partie 2
/////////////////////////////////////// Modification du DOM


window.addEventListener("load",distribAction);

var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
var Italie = ["Rome", "Milan", "Florence", "Venise"];
var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
var Espagne = ["Barcelone", "Valencia", "Albacet", "Cadix"];

function distribAction() {
  document.getElementById("myBtn2").addEventListener("click", promptPays);
}

function promptPays(event) {
  var input2 = document.getElementById("recuperationChamp2").value;
  //console.log('recupResultInput',input2);
  if(Congo.includes(input2)){
    for(let i in Congo) {
      if(Congo[i] !== input2){
        resultGlobal += "<li>" + Congo[i] + "</li>";
        console.log("resultGlobal if", resultGlobal);
        document.getElementById("villes").innerHTML = resultGlobal;
      }
    }
  } else if (Italie.includes(input2)) {
    for(let i in Italie) {
         resultGlobal += "<li>" + Italie[i] + "</li>";
        document.getElementById("villes").innerHTML = resultGlobal;
        console.log("resultGlobal", resultGlobal);
    }
  } else if (Irlande.includes(input2)) {

    for(let i in Irlande) {
         resultGlobal += "<li>" + Irlande[i] + "</li>";
        document.getElementById("villes").innerHTML = resultGlobal;
        console.log("resultGlobal", resultGlobal);
    }
  } else if (Espagne.includes(input2)) {

    for(let i in Espagne) {
         resultGlobal += "<li>" + Espagne[i] + "</li>";
        document.getElementById("villes").innerHTML = resultGlobal;
        console.log("resultGlobal", resultGlobal);
        document.getElementById("villes").style.backgroundColor = "#FF6699";
    }
  } else {
    event.preventDefault();
  }

}
