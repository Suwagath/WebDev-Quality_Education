document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      let validation = true;
  
      // Validate Name
      const name = document.getElementById("name").value.trim();
      if (name === "") {
        validation = false;
        alert("Name is required.");
      }
  
      // Validate Email
      const email = document.getElementById("email").value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        validation = false;
        alert("Please enter a valid email address.");
      }
  
      // Validate First Visit
      const firstVisit = document.querySelector('input[name="first_visit"]:checked');
      if (!firstVisit) {
        validation = false;
        alert("Please select if this is your first visit.");
      }
  
      // Validate Informative
      const informative = document.querySelector('input[name="informative"]:checked');
      if (!informative) {
        valid = false;
        alert("Please select if the website was informative.");
      }
  
      // Validate Satisfaction
      const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
      if (!satisfaction) {
        valid = false;
        alert("Please select your satisfaction level.");
      }
  
      // Validate Recommend
      const recommend = document.querySelector('input[name="recommend"]:checked');
      if (!recommend) {
        valid = false;
        alert("Please select if you would recommend our services.");
      }
  
      // Validate Updates
      const updates = document.getElementById("updates").value;
      if (updates === "") {
        validation = false;
        alert("Please select if you would like to receive updates.");
      }
  
      if (!validation) {
        event.preventDefault();
      }
    });
  });
  