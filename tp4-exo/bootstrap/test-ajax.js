var obj = {envoi:'coucou'}
$.ajax({
  url:"donnees-jquery.php",
  type:"POST",
data:obj
}).done(function(arg){
  alert("Données:"+arg);
});
