// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

	$(  document).on("pageinit", function(event) {
                  $("#popupNombre", $(this)).popup("open");
                });
    // Now safe to use device APIs
	
	
}
});