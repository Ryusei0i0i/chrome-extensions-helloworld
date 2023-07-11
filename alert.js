function showAlert() {
  document.write("Hello World!");
}
document.getElementById("alertButton").onclick = function() {
  showAlert();
};