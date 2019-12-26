window.addEventListener("load",chargementPage);
/////suppression ligne
function deleteRow(buttonSuppr){
  var row = buttonSuppr.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function chargementPage() {
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

    $.each(array, function(index, element){
      resultat = resultat + "<tr>";
      resultat = resultat + "<td>" + element.nom + "</td>";
      resultat = resultat + "<td><img src=" + element.source + "/></td>";
      resultat = resultat + "<td id=test"+index+">" + element.commentaire + "</td>";
      resultat = resultat + "<td>" + element.prix + "</td>";
      resultat = resultat + "<td>" + element.offre + "</td>";
      resultat = resultat + '<td><input type="button" value="Découvrir"></td>';
      resultat = resultat + '<td><button id="button'+index+'">Modifier</button></td>';
      // resultat = resultat + '<td><button id="buttonSuppr" onclick="deleteRow(this)">Supprimer</button></td>';
      resultat = resultat + "<td><input type='button' id='buttonSuppr' onclick='deleteRow(this)' value='Supprimer'/></td>";

    });
    $('#tbody').html(resultat);

    /////insertion ligne
  //   function addRow() {
  //     $( "#target" ).submit(function( event ) {
  //
  //       event.preventDefault();
  //
  //       var destination = jQuery(#destination).val();
  //       var source = jQuery(#source).val();
  //       var commentaire = jQuery(#commentaire).val();
  //       var prix = jQuery(#prix).val();
  //       var prix = jQuery(#prix).val();
  //
  //       alert( "Handler for .submit() called." );
  // });
//});

    // array.push().append(<tr>
    //   <td>' + destination +'</td>
    //   <td>' + source +'</td>
    //   <td>' + commentaire +'</td>
    //   <td>' + prix +'</td>
    //   <td>' + offre +'</td>
    //   </tr>);



    array.forEach(function(element, index){
        document.getElementById("button"+index).addEventListener("click", function(event){
            var saisie= document.getElementById("commentaire").value;
            document.getElementById("test"+index).innerHTML = saisie;
      });
    });

  ///////////////////////////////////: affichage menu
    var items = "";
    arrayMenu.forEach(function(elementMenu){
      //console.log("elementMenu.link", elementMenu.link);
      items += "<li class='menu-item'><a href=" + elementMenu.link + ">" + elementMenu.item + "</a></li>";
      //console.log("items", items);
    })

    var menu = document.getElementById("menu").innerHTML = items;
    //console.log('menu', menu);

  }

  /////////////////////////////////////

  var arrayMenu = [
    {
      item : "Home",
      link : "#accueil",
    },
    {
      item : "Destinations",
      link : "#destination",
    },
    {
      item : "Contact",
      link : "#contact",
    }
  ];
