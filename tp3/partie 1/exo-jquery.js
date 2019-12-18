// var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
// var Italie = ["Rome", "Milan", "Florence", "Venise"];
// var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
// var Espagne = ["Malaga", "Valencia", "Albacete", "Cadix"];
//
// var input2 = $("#recuperationChamp2").val();
//
// $(document).ready(function(){
//   $("#myBtn2").click(function(){
//     ///////////////////////////
//     if(Congo.includes(input2)){
//         afficheListVilles(Congo, input2);
//
//     } else if (Italie.includes(input2)) {
//         afficheListVilles(Italie, input2);
//
//     } else if (Irlande.includes(input2)) {
//         afficheListVilles(Irlande, input2);
//
//     } else if (Espagne.includes(input2)) {
//         afficheListVilles(Espagne, input2);
//
//     } else {
//       event.preventDefault();
//     }
//  });
// });
//
//  function afficheListVilles(pays, input2){
//    var resultGlobal = [];
//
//    for(let i in pays) {
//      if( pays[i] !=input2) {
//        resultGlobal += "<li>" + pays[i] + "</li>";
//
//      }
//    }
//
//    $("#villes").html(resultGlobal);
//  }

//////////////////////////////

//var villes = document.getElementsById("villes").value;
console.log('je rentre ici');

window.addEventListener("load",distribAction);

var Congo = ["kinshasa", "Goma", "Butembo", "bukavu"];
var Italie = ["Rome", "Milan", "Florence", "Venise"];
var Irlande = ["Dublin", "Cork", "Galway", "Limerick"];
var Espagne = ["Barcelone", "Valencia", "Albacet", "Cadix"];

// function distribAction() {
//   document.getElementById("myBtn2").addEventListener("click", promptPays);
// }


$(document).ready(function() {
  $("#commentaireBtn").click(function(){

    var nvoText = $('commentaireInput').val();
    console.log('nvoText', nvoText);

    //$('test').html();
    //$("#villes").html(resultGlobal);
    //console.log('inputCommentaire', inputCommentaire);
    //console.log('test', test);

  })
})
