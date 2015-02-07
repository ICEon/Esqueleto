// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
		//alert ("ready");

		
	$(  document).on("pagecreate", function(event) {
	//	alert ("dentro");
                  $("#popupNombre", $(this)).popup("open");
                });
    // Now safe to use device APIs
	
	
}
});