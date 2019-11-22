// var result = window.prompt("choisssez un chiffre");
// var random = Math.floor(Math.random() * 10) + 1;
// var compteur = 0;
//
// function choixNombre() {
//   //alert(prompt("Choisissez nombre"));
//       console.log('result', result);
//       console.log('random', random);
//       console.log('compteur or while', compteur);
//
//         while(result != random) { // || compteur <4
//
//           if(result > random) {
//             compteur+=1;
//             result = window.prompt("Votre nombre est trop grand!");
//           } else if (result < random) {
//             compteur+=1;
//             result = window.prompt("Votre nombre est trop petit!");
//           }
//         }
//         alert("gagné");
//     //var affichageResult =
//     //document.getElementsById("resultat").value = "Gagné!";
//     //console.console.log("test--------------", document.getElementsById("resultat").value = "Gagné!");
//     //affichageResult.innerHTML = "Gagné!";
// }
// // permet de lancer la method une fois que tout est chargé
// window.addEventListener("load",choixNombre);

////////////////////////////////////////
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
//   result = alert("Vous venez du Congo");
// } else if (Italie.includes(input)) {
//   result = alert("Vous venez du Italie");
// } else if (Irlande.includes(input)) {
//   result = alert("Vous venez du Irlande");
// } else if (Espagne.includes(input)) {
//   result = alert("Vous venez du Espagne");
// } else {
//   event.preventDefault();
// }
//
// }
///////////////////////////////////////::

//var villes = document.getElementsById("villes").value;


// window.addEventListener("load",distribAction);
//
// var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
// var Italie = ["Rome", "Milan", "Florence", "Venise"];
// var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
// var Espagne = ["Barcelone", "Valencia", "Albacet", "Cadix"];
//
// function distribAction() {
//   document.getElementById("myBtn2").addEventListener("click", promptPays);
// }
//
// function promptPays(event) {
//   var input2 = document.getElementById("recuperationChamp2").value;
//   //console.log('recupResultInput',input2);
// var resultGlobal = [];
// if(Congo.includes(input2)){
//   for(let i in Congo) {
//        resultGlobal += "<li>" + Congo[i] + "</li>";
//       document.getElementById("villes").innerHTML = resultGlobal;
//       console.log("resultGlobal", resultGlobal);
//       //document.getElementById("villes").style.backgroundColor = "#FF0000";
//
//   }
// } else if (Italie.includes(input)) {
//   result = alert("Vous venez du Italie");
// } else if (Irlande.includes(input)) {
//   result = alert("Vous venez du Irlande");
// } else if (Espagne.includes(input)) {
//   result = alert("Vous venez du Espagne");
// } else {
//   event.preventDefault();
// }
//
// }

/////////////////////////////////////////////:
var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
var Italie = ["Rome", "Milan", "Florence", "Venise"];
var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
var Espagne = ["Barcelone", "Valencia", "Albacet", "Cadix"];

var input2 = document.getElementById("recuperationChamp2").value;


$(document).ready(function(){

  $("#myBtn2").click(function(){
    var resultGlobal = [];
    if(Congo.includes(input2)){
      for(let i in Congo) {
           resultGlobal += "<li>" + Congo[i] + "</li>";
          //document.getElementById("villes").style.backgroundColor = "#FF0000";

      }
      }
      $("#villes").html(resultGlobal);
      console.log("resultGlobal", resultGlobal);


  //alert("resultGlobal");


    // } else if (Italie.includes(input)) {
    //
    // } else if (Irlande.includes(input)) {
    //
    // } else if (Espagne.includes(input)) {
    //
    // } else {
    //   event.preventDefault();
    // }
  });
});
//////////////////////////////

// var villes = document.getElementsById("villes").value;
// console.log('je rentre ici');
//
// window.addEventListener("load",distribAction);
//
// var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
// var Italie = ["Rome", "Milan", "Florence", "Venise"];
// var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
// var Espagne = ["Barcelone", "Valencia", "Albacet", "Cadix"];
//
// function distribAction() {
//   document.getElementById("myBtn2").addEventListener("click", promptPays);
// }
//
// function promptPays(event) {
//   var input2 = document.getElementById("recuperationChamp2").value;
//   //console.log('recupResultInput',input2);
//
// if(Congo.includes(input2)){
//   //for(var i = 0 ; i < input2.lenght; i ++) {
//     console.log('je rentre ici');
//     //result = alert("Bienvenue à " + input2 + " vous pouvez également visiter Congo et aussi : ");
//     //villes.innerHTML = "input2[i]"";
//   //}
// } else if (Italie.includes(input)) {
//   result = alert("Vous venez du Italie");
// } else if (Irlande.includes(input)) {
//   result = alert("Vous venez du Irlande");
// } else if (Espagne.includes(input)) {
//   result = alert("Vous venez du Espagne");
// } else {
//   event.preventDefault();
// }
//
// }
