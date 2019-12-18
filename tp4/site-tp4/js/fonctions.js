window.addEventListener("load",chargementPage);

/////suppression ligne
function deleteRow(buttonSuppr){
  var row = buttonSuppr.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function chargementPage() {
card();
}

function card(){
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

 array.forEach(element => {
      $("#tbody").append(
      `<div>
      <div>${element.nom}</div>
      <div><img src=${element.source}/></div>
      <div>${element.commentaire}</div>
      <div>${element.prix}</div>
      <div>${element.offre}</div>
      </div>`)
    })
}
    // resultat = resultat + '<td><button id="buttonSuppr" onclick="deleteRow(this)">Supprimer</button></td>';
    // <div><input type="button" value="Découvrir"></div>
    // <div><button id="button">Modifier</button></div>
    // <div><input type="button" id="buttonSuppr" onclick="deleteRow(this)" value="Supprimer" /></div>

    //insertion ligne
//     function addRow() {
//       $( "#target" ).submit(function( event ) {
//
//         event.preventDefault();
//
//         var destination = $("#destination").val();
//         var commentaire = $("#commentaire").val();
//         var prix = $("#prix").val();
//         var offre = $("#offre").val();
//
//         alert( "Handler for .submit() called." );
//   });
// });

    // array.push().append(`<tr>
    //   <td>${destination}</td>
    //   <td>${source}</td>
    //   <td>${commentaire}</td>
    //   <td>${prix}</td>
    //   <td>${offre}</td>
    //   </tr>`);


//     array.forEach(function(element, index){
//         document.getElementById("button"+index).addEventListener("click", function(event){
//             var saisie= document.getElementById("commentaire").value;
//             document.getElementById("test"+index).innerHTML = saisie;
//       });
//     });

  ///////////////////////////////////Affichage menu
    var items = "";
    arrayMenu.forEach(function(elementMenu){
      items += "<li class='menu-item'><a href=" + elementMenu.link + ">" + elementMenu.item + "</a></li>";
    })

    var menu = document.getElementById("menu").innerHTML = items;
  }

  ///////////////////////////////////// Contenu Menu

  var arrayMenu = [
    {
      item : "Home",
      link : "agence_voyage.html",
    },
    {
      item : "Services",
      link : "services.html",
    },
    {
      item : "Destinations",
      link : "destinations.html",
    },
    {
      item : "Voyage audio",
      link : "audio.html",
    },
    {
      item : "Voyage visuel",
      link : "video.html",
    },
    {
      item : "Contact",
      link : "contact.html",
    }
  ];
