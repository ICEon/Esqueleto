// JavaScript Document
$(document).ready(function(e) {
$(document).on("pageshow","#principal",function(event){
		alert ("dos2");
	});
document.addEventListener("deviceready", function() {
alert ("ready");

	


		
	$(document).on("pageshow","#principal",function(event){
		alert ("dentro");
                 // $("#popupNombre", $(this)).popup("open");
			//	  alert ("fuera");
                });
    // Now safe to use device APIs
	
	
});
});