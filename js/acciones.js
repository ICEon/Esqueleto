// JavaScript Document
$(document).ready(function(e) {

document.addEventListener("deviceready", function() {




		
	$(document).on("pageshow","#principal",function(event){
		alert ("dentro");
                  $("#popupNombre", $(this)).popup("open");
			//	  alert ("fuera");
                });
    // Now safe to use device APIs
	
	
});
});