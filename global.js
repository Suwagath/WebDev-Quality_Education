// JavaScript to dynamically set the active class on the current page link

// Listen for the DOMContentLoaded event to ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');
    // Get the current page's path and extract the last part (filename)
    const currentPath = window.location.pathname.split('/').pop();
  
    // Iterate over each nav-link to check if it matches the current page
    navLinks.forEach(link => {
      // If the href attribute of the link matches the current path, add the 'active' class to it
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
});