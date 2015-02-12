// JavaScript Document

$(document).on("pagecreate",function(){
$('.logotipo').css({"width": $('#principal').width()*.28 , "height": 'auto'});
});    

$(document).ready(function(e) {
	
	$("#muscia").click (function (){

if ($('#muscia').hasClass('ui-icon-noaudio'))
{
	$('#muscia').removeClass('ui-icon-noaudio');
	$('#muscia').addClass('ui-icon-audio');
}
else
{
		$('#muscia').removeClass('ui-icon-audio');
	$('#muscia').addClass('ui-icon-noaudio');
}


	});
$("#respuesta3").addClass("correcta");
    var cuantas = 0;
	var Respuestas=[];
	var RespuestasO = ["","","",""]
	var Preguntas=[];
	var PreguntasO = ["","","","","","",""]
	var Continuar = true;

	
	
	$('.ligas').click(function(){
		var x= $('#encabezado').css("height");

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top  - (parseInt(x, 10)*1.1)
    }, 700);
    return false;
});
	
$(".correcta").click(function(){
        //$('.resp').buttonMarkup({ icon: "delete" });
	    //$(this).buttonMarkup({ icon: "check" });
	
});

$('.resp').click(function(e){
 $(".correcta").css('background-color', '#87D658');
});


//$('#R1').css('height', $('#respuesta').css('height'));
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
   tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (1, "Es un tipo de caja de almacenamiento que se utiliza para recordar valores, de forma que éstos puedan utilizarse o modificarse más adelante en el programa.", "Caja de texto", "Esquema", "Operadores", "Variables", 1)');
      tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (2, "Nos ayuda a determinar la forma en que se puede dar solución a un problema.", "Diagrama de flujo", "Algoritmo", "Esquema", "Lógica computacional", 1)');
	     tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (3, "Conjunto de actividades formados por una serie de  instrucciones organizadas de forma lógica, que nos permiten resolver un problema.", "Compilación y errores", "Prueba de escritorio", "Diagrama de flujo", "Algoritmos", 1)');
		    tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (4, "¿Cuáles son características principales de un algoritmo?", "Compilación y errores", "Precisión y la compilación", "Transcripción", "Precisión, determinismo, finitud", 1)');
			   tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (5, "Es la comprobación de forma  lógica, de un algoritmo.", "Diagrama de flujo", "Transcripción", "Compilación y errores", "Prueba de escritorio", 1)');
			      tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (6, "En cada paso del algoritmo se determina de forma única el  siguiente paso. ¿A qué clasificación se refiere?", "Algoritmo no determinista", "Diagrama de flujo", "Esquema", "Algoritmo determinista", 1)');
				     tx.executeSql('INSERT INTO Preguntas (CvePregunta, Pregunta, R1, R2, R3, RC, Modulo) VALUES (7, "Es el proceso a través del cual convertimos un algoritmo en un listado de instrucciones entendibles para la computadora.", "Diagrama de flujo", "Compilación", "Validación", "Transcripción", 1)');

});

$('.jugart').bind('click', function (){
 cuantas = 0;
	RespuestasO = ["","","",""];
	PreguntasO = ["","","","","","",""];
	
  db.transaction (function (ejecutar){
   var sql = "SELECT * FROM Preguntas";
   ejecutar.executeSql (sql, undefined,
   function (ejecutar, resultado){


for (var x = 0; x < resultado.rows.length ; x++)
{
	var filaP = resultado.rows.item (x)
 var Preguntas = [ {
    "clave" : filaP.CvePregunta,
    "pregunta" : filaP.Pregunta,
    "r1" : filaP.R1,
    "r2" : filaP.R2,
    "r3" : filaP.R3,
    "rc" : filaP.RC
}];	
}


      alert (Preguntas [0]['clave']);
	        alert (Preguntas [0]['pregunta']);
	  
/*      Respuestas [0] = fila.R1;
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
  // alert ("donde " + orden + "->" + RespuestasO [orden] + "<-");

	if (RespuestasO [orden] == "")
	 {
	//	 alert ("dentro");
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

	 a_html += "</ul>";
	 
	 var $contenido = $("#preguntas");
     $contenido.append (a_html);
     var $ul = $contenido.find ("ul");
     $ul.listview ();
	 alert (a_html);*/
    });
   });
  });
  
});


});

