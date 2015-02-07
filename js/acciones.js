// JavaScript Document
$(document).ready(function(e) {
	var Respuestas=[];
	var RespuestasO = []
	var Continuar = true;
	
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
		   tx.executeSql('INSERT INTO Usuario (Nombre) VALUES ("ICEon")');
   tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (1, "Que es HTML", "No se", "Super", "Lenguaje de programacion", "Hypertext Markup Lenguage", 3)');

});

$('#jugar').bind('click', function (){
	
  db.transaction (function (ejecutar){
	  alert('play');
   var sql = "SELECT * FROM Preguntas";
   ejecutar.executeSql (sql, undefined,
   function (ejecutar, resultado){

alert(resultado.rows.length);

    if (resultado.rows.length)
     {
      var fila = resultado.rows.item (0);
      Respuestas [0] = fila.R1;
	  Respuestas [1] = fila.R2;
	  Respuestas [2] = fila.R3;
	  
	  
	  var orden = Math.floor((Math.random() * 4) + 1) - 1;
	  alert ("Correcta " + orden);
	  RespuestasO [orden] = fila.RC;
	  
for (var i = 0; i < 3; i++)
{
  while (Continuar)
  {
   orden = Math.floor((Math.random() * 4) + 1) - 1;
   alert ("donde " + orden + "->" + RespuestasO [orden] + "<-");

	if (RespuestasO [orden] == 'undefined')
	 {
		 alert ("dentro");
	  RespuestasO[orden] = Respuestas[i];
	  Continuar = false;
	 }

  }
  Continuar = true;
}
	  
	  
	  
	  var a_html = "<h3>"+fila.Pregunta+"</h3> <br> <ul>";        
      var Res1 = RespuestasO[0];
      var Res2 = RespuestasO[1];
	  var Res3 = RespuestasO[2];
      var Res4 = RespuestasO[3];
      a_html += "<li>" + Res1 + "</li>";
      a_html += "<li>" + Res2 + "</li>";
      a_html += "<li>" + Res3 + "</li>";
      a_html += "<li>" + Res4 + "</li>";				  
     }
	 a_html += "</ul>";
	 
	 var $contenido = $("#preguntas");
     $contenido.append (a_html);
     var $ul = $contenido.find ("ul");
     $ul.listview ();
	 alert (a_html);
    });
   });
  });
  
});
});