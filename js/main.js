// AJAX request
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // Recover and store infos.json data
    let myJSON = JSON.parse(xhttp.responseText);
    // Display the data in the console
    console.log(myJSON);
  }
};
xhttp.open("GET", "infos.json", true);
xhttp.overrideMimeType("application/json"); /* remove an error */
xhttp.send();


// Recover "tbody"
let tbody = document.getElementById('tbody');
// Create HTML elements (4 "td" in "tr")
let tr = document.createElement('tr');
let td = document.createElement('td');
// Add content at the HTML elements

// Add HTML elements in the DOM






//
