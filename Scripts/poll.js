function result() {
    if (document.getElementById('keviny').checked) {
        alert("Correct Kevin is a Pleb");
    }
    else {
        alert("Incorrect Kevin is a Pleb");
    }
}

document.addEventListener('konamiCode', function(event) {
  // do stuff on konami Code
  window.location.replace("http://kevinisapleb.azurewebsites.net");
  
})