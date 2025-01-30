function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("lens-show") == -1) {
      x.className += " lens-show";
    } else { 
      x.className = x.className.replace(" lens-show", "");
    }
  }