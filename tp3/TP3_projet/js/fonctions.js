window.addEventListener("load",chargementPage);

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

  array.forEach(function(element, index){
    //console.log('element.nom', element.nom);
    resultat = resultat + "<tr>";
    resultat = resultat + "<td>" + element.nom + "</td>";
    resultat = resultat + "<td><img src=" + element.source + "/></td>";
    resultat = resultat + "<td id='test'>" + element.commentaire + "</td>";
    resultat = resultat + "<td>" + element.prix + "</td>";
    resultat = resultat + "<td>" + element.offre + "</td>";
    resultat = resultat + '<td><input type="button" value="Découvrir"></td>';
    resultat = resultat + '<td><button id="button" value='+ index +'>Modifier</button></td>';
  });
  document.getElementById("tbody").innerHTML = resultat;

//////////////////////////////////////////////

    document.getElementById("button").addEventListener("click", modifierCommentaire);
    function modifierCommentaire() {

      var nvoCOmmentaire = document.getElementById("commentaire").value;
      document.getElementById("test").innerHTML = nvoCOmmentaire;
      //console.log('inputCommentaire', inputCommentaire);

      //console.log('changerCommentaire', changerCommentaire)

    }


  ///////////////////////////////////:
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
