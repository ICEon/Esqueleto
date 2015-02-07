// JavaScript Document
$(document).ready(function(e) {
$(document).on("pageshow","#principal",function(event){
		alert ("dos2");
	});
document.addEventListener("deviceready", function() {
alert ("ready");

	

$( '#principal' ).live( 'pagecreate',function(event){
alert ("alive");
});
		
	$(document).on("pageshow","#principal",function(event){
		alert ("dentro");
                 // $("#popupNombre", $(this)).popup("open");
			//	  alert ("fuera");
                });
    // Now safe to use device APIs
	
	
});
});