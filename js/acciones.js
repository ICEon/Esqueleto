// JavaScript Document
$(document).ready(function(e) {
	
	
document.addEventListener( 'deviceready', function() {
//alert ("ready");

	//$(document).on('pagebeforecreate','#principal',function(e){
//		alert ("tres3");
//	});
    var dbTam = 5 * 1024 * 1024; // 5MB
	var db = openDatabase ("TecnoQ", "1.0", "Preguntas TecnoQ", dbTam);

    db.transaction (function (transaction)
     {
      var sql = "CREATE TABLE IF NOT EXISTS Puntajes " +
      " (Usuario, " +
      "Puntaje NOT NULL, " +
      "Fecha NOT NULL)";
      transaction.executeSql (sql, undefined, function ()
       {
        alert ("Tabla Creada 'Puntajes'");
       }, error);
     });

     db.transaction (function (transaction)
      {
       var sql = "CREATE TABLE IF NOT EXISTS Usuario " +
       "(Nombre)";
       transaction.executeSql (sql, undefined, function ()
        {
         alert ("Tabla Creada 'Usuario'");
        }, error);
      });


     db.transaction (function (transaction)
      {
       var sql = "CREATE TABLE IF NOT EXISTS Preguntas " +
       " (CvePregunta INTEGER NOT NULL UNIQUE, " +
       "Pregunta NOT NULL, " +
       "R1 NOT NULL, " +
       "R2 NOT NULL, " +
       "R3 NOT NULL, " +
       "RC NOT NULL, " +
       "Modulo INTEGER NOT NULL)"
       transaction.executeSql (sql, undefined, function ()
        {
         alert ("Tabla Creada");
        }, error);
      });

      function error (transaction, err)
       {
        alert ("DB error : " + err.message);
        return false;
       } 


	db.transaction(function (tx) {
		   tx.executeSql('INSERT INTO Usuario (Nobre) VALUES ("ICEon")');
   tx.executeSql('INSERT INTO Preguntas (CvePregunta, Preguunta, R1, R2, R3, RC, Modulo) VALUES (1, "Que es HTML", "No se", "Super", "Lenguaje de programacion", "Hypertext Markup Lenguage", 3)');

});

$('#jugar').bind('click', function (){
	alert('play');
  db.transaction (function (ejecutar){
   var sql = "SELECT * FROM Preguntas";
   ejecutar.executeSql (sql, undefined,
   function (ejecutar, resultado){

    if (resultado.rows.length)
     {
      var fila = resultado.rows.item (0);
      var a_html = "<h3>"+fila.Pregunta+"</h3> <br> <ul>";        
      var Res1 = fila.R1;
      var Res2 = fila.R2;
	  var Res3 = fila.R3;
      var ResC = fila.RC;
      a_html += "<li>" + Res1 + "</li>";
      a_html += "<li>" + Res2 + "</li>";
      a_html += "<li>" + Res3 + "</li>";
      a_html += "<li>" + ResC + "</li>";				  
     }
	 a_html += "</ul>";
	 
	 var $contenido = $("#preguntas");
     $contenido.html (a_html);
     var $ul = $contenido.find ("ul");
     $ul.listview ();
	 alert (a_html);
    });
   });
  });
  
});
});