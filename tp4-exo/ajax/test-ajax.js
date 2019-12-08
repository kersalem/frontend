
// window.addEventListener("load",buttonAjax);
//
// function buttonAjax() {
//   document.getElementById("myBtn").addEventListener('click', actionButton);
// }

$(document).ready(function() {
  $("#myBtn").click(function() {
    actionButton();
  });
});

function actionButton() {
  var obj = {envoi:'coucou'}
  $.ajax({
    url:"http://localhost:8000",
    type:"POST",
    data:obj
  }).done(function(arg){
    alert("Données:"+arg);
  });

}
