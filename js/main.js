function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // ...
    }
  };
  xhttp.open("GET", "infos.json", true);
  xhttp.overrideMimeType("application/json"); /* remove an error */
  xhttp.send();
}








//
