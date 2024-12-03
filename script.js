document.addEventListener("DOMContentLoaded", function () { 
  // Ensures the DOM is fully loaded before executing this block.

  const navbar = document.querySelector(".navbar"); 
  // Selects the navbar element from the DOM.

  const menuToggle = document.querySelector(".menu-toggle"); 
  // Selects the menu toggle button from the DOM.

  menuToggle.addEventListener("click", function () { 
    // Adds a click event listener to the menu toggle button.
    
    navbar.classList.toggle("active"); 
    // Toggles the 'active' class on the navbar to show or hide it.
  });
});

document.addEventListener("DOMContentLoaded", function () { 
  // Ensures the DOM is fully loaded before executing this block.

  function openOverlay() { 
    // Defines a function to display an overlay.

    var overlay = document.getElementById("overlay"); 
    // Selects the overlay element by its ID.

    overlay.style.display = "block"; 
    // Sets the overlay's display style to 'block' to make it visible.
  }

  function closeOverlay() { 
    // Defines a function to hide the overlay.

    var overlay = document.getElementById("overlay"); 
    // Selects the overlay element by its ID.

    overlay.style.display = "none"; 
    // Sets the overlay's display style to 'none' to hide it.
  }

  var applyButton = document.getElementById("applyButton"); 
  // Selects the "apply" button by its ID.

  var closeButton = document.getElementById("closeButton"); 
  // Selects the "close" button by its ID.

  if (applyButton) { 
    // Checks if the "apply" button exists in the DOM.

    applyButton.addEventListener("click", openOverlay); 
    // Adds a click event listener to show the overlay.
  }

  if (closeButton) { 
    // Checks if the "close" button exists in the DOM.

    closeButton.addEventListener("click", closeOverlay); 
    // Adds a click event listener to hide the overlay.
  }
});

document.addEventListener("DOMContentLoaded", function () { 
  // Ensures the DOM is fully loaded before executing this block.

  function openLogin() { 
    // Defines a function to display the login overlay.

    var overlaylogin = document.getElementById("overlaylogin"); 
    // Selects the login overlay element by its ID.

    overlaylogin.style.display = "block"; 
    // Sets the login overlay's display style to 'block' to make it visible.
  }

  function closeLogin() { 
    // Defines a function to hide the login overlay.

    var overlaylogin = document.getElementById("overlaylogin"); 
    // Selects the login overlay element by its ID.

    overlaylogin.style.display = "none"; 
    // Sets the login overlay's display style to 'none' to hide it.
  }

  var applylogin = document.getElementById("applylogin"); 
  // Selects the "apply login" button by its ID.

  var closeLog = document.getElementById("closeButtonLog"); 
  // Selects the "close login" button by its ID.

  if (applylogin) { 
    // Checks if the "apply login" button exists in the DOM.

    applylogin.addEventListener("click", openLogin); 
    // Adds a click event listener to show the login overlay.
  }

  if (closeLog) { 
    // Checks if the "close login" button exists in the DOM.

    closeLog.addEventListener("click", closeLogin); 
    // Adds a click event listener to hide the login overlay.
  }
});

// Code block for switching overlays (commented out). 
// Provides functions for dynamically toggling between overlays with optional background blurring.

document.addEventListener('DOMContentLoaded', function () { 
  // Ensures the DOM is fully loaded before executing this block.

  const savedTheme = localStorage.getItem('theme'); 
  // Retrieves the saved theme from local storage.

  const themeLink = document.getElementById('theme-link'); 
  // Selects the link element used for theme styles.

  if (savedTheme) { 
    // Checks if a saved theme exists.

    themeLink.setAttribute('href', savedTheme); 
    // Sets the href attribute of the theme link to the saved theme.
  }
});

function toggleTheme() { 
  // Defines a function to toggle between themes.

  const themeLink = document.getElementById('theme-link'); 
  // Selects the link element used for theme styles.

  const currentTheme = themeLink.getAttribute('href'); 
  // Retrieves the current theme's file name.

  var themeIcon = document.querySelector('.theme-icon'); 
  // Selects the theme icon element.

  var currentIcon = themeIcon.classList.contains('fa-sun') ? 'fa-sun' : 'fa-moon'; 
  // Determines the current icon class.

  if (themeIcon.classList.contains('fa-sun')) { 
    // Checks if the current icon is 'fa-sun'.

    themeIcon.classList.remove('fa-sun'); 
    // Removes the 'fa-sun' class.

    themeIcon.classList.add('fa-moon'); 
    // Adds the 'fa-moon' class.

    localStorage.setItem('themeChoice', 'fa-moon'); 
    // Saves the 'fa-moon' theme choice to local storage.
  } else { 
    // If the current icon is not 'fa-sun'.

    themeIcon.classList.remove('fa-moon'); 
    // Removes the 'fa-moon' class.

    themeIcon.classList.add('fa-sun'); 
    // Adds the 'fa-sun' class.

    localStorage.setItem('themeChoice', 'fa-sun'); 
    // Saves the 'fa-sun' theme choice to local storage.
  }

  if (currentTheme === 'styles.css') { 
    // Checks if the current theme is 'styles.css'.

    themeLink.setAttribute('href', 'dark.css'); 
    // Switches to 'dark.css'.

    localStorage.setItem('theme', 'dark.css'); 
    // Saves the dark theme in local storage.
  } else { 
    // If the current theme is not 'styles.css'.

    themeLink.setAttribute('href', 'styles.css'); 
    // Switches back to 'styles.css'.

    localStorage.setItem('theme', 'styles.css'); 
    // Saves the default theme in local storage.
  }
}

let signupBtn = document.getElementById("signupBtn"); 
// Selects the "Sign Up" button by its ID.

let signinBtn = document.getElementById("signinBtn"); 
// Selects the "Sign In" button by its ID.

let nameField = document.getElementById("nameField"); 
// Selects the name input field by its ID.

let title = document.getElementById("title"); 
// Selects the title element by its ID.

signinBtn.onclick = function () { 
  // Sets an onClick handler for the "Sign In" button.

  nameField.style.maxHeight = "0"; 
  // Collapses the name input field.

  title.innerHTML = "SIGN IN"; 
  // Updates the title to "SIGN IN".

  signupBtn.classList.add("disable"); 
  // Disables the "Sign Up" button.

  signinBtn.classList.remove("disable"); 
  // Enables the "Sign In" button.
};

signupBtn.onclick = function () { 
  // Sets an onClick handler for the "Sign Up" button.

  nameField.style.maxHeight = "60px"; 
  // Expands the name input field.

  title.innerHTML = "SIGN UP"; 
  // Updates the title to "SIGN UP".

  signupBtn.classList.remove("disable"); 
  // Enables the "Sign Up" button.

  signinBtn.classList.add("disable"); 
  // Disables the "Sign In" button.
};

document.addEventListener('DOMContentLoaded', function () { 
  // Ensures the DOM is fully loaded before executing this block.

  var storedChoice = localStorage.getItem('themeChoice'); 
  // Retrieves the saved theme icon choice from local storage.

  if (storedChoice) { 
    // Checks if a saved theme icon choice exists.

    var themeIcon = document.querySelector('.theme-icon'); 
    // Selects the theme icon element.

    themeIcon.classList.remove('fa-sun', 'fa-moon'); 
    // Removes any existing icon class.

    themeIcon.classList.add(storedChoice); 
    // Adds the saved theme icon class.
  }
});
