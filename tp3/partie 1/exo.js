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
//         while(result != random)<input type="button" value="Découvrir"> { // || compteur <4
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

// window.addEventListener("load",distribAction);
// function distribAction() {
//   $("myBtn2").click(promptPays);
// }

var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
var Italie = ["Rome", "Milan", "Florence", "Venise"];
var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
var Espagne = ["Malaga", "Valencia", "Albacete", "Cadix"];

var input2 = $("#recuperationChamp2").val();

var resultGlobal = [];

$(document).ready(function(){
  $("#myBtn2").click(function(){
    ///////////////////////////
    if(Congo.includes(input2)){
        afficheListVilles(Congo);

    } else if (Italie.includes(input2)) {
        afficheListVilles(Italie);

    } else if (Irlande.includes(input2)) {
        afficheListVilles(Irlande);

    } else if (Espagne.includes(input2)) {
        afficheListVilles(Espagne);

    } else {
      event.preventDefault();
    }
    ////////////////////////////////////////////
 });
});

 function afficheListVilles(pays){
   for(let i in pays) {
       console.log("tyest", input2 != pays.includes(input2));
       resultGlobal += "<li>" + pays[i] + "</li>";
      // var resultSansVilleSaisie = resultGlobal.filter(villeSaisie => villeSaisie == input2);
      // console.log('resultSansVilleSaisie', resultSansVilleSaisie);
     }

   $("#villes").html(resultGlobal);
 }

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


// $(document).ready(function() {
//   $("#commentaireBtn").click(function(){
//
//     var nvoText = $('commentaireInput').val();
//     console.log('nvoText', nvoText);
//
//     //$('test').html();
//     //$("#villes").html(resultGlobal);
//     //console.log('inputCommentaire', inputCommentaire);
//     //console.log('test', test);
//
//   })
// })
