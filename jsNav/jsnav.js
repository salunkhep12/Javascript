function myFunction(event) {
    // Get the button that was clicked and toggle the corresponding dropdown
    var dropdownContent = event.target.nextElementSibling;
    dropdownContent.classList.toggle("show");

    // Close any other open dropdowns
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i] !== dropdownContent && dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
      }
    }
  }

  // Close dropdowns if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('show')) {
          dropdowns[i].classList.remove('show');
        }
      }
    }
  }