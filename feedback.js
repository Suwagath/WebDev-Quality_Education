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
      validation = false;
      alert("Please select if the website was informative.");
    }

    // Validate Satisfaction
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked');
    if (!satisfaction) {
      validation = false;
      alert("Please select your satisfaction level.");
    }

    // Validate Recommend
    const recommend = document.querySelector('input[name="recommend"]:checked');
    if (!recommend) {
      validation = false;
      alert("Please select if you would recommend our services.");
    }

    // Validate Updates
    const updates = document.getElementById("updates").value;
    if (updates === "") {
      validation = false;
      alert("Please select if you would like to receive updates.");
    }

    // Show success message if form is valid
    if (validation) {
      event.preventDefault();  // Prevent actual form submission

      const successMessage = document.getElementById("success-message");
      form.reset();
      successMessage.classList.add("show");
      successMessage.classList.add("animated", "fadeIn");
      setTimeout(() => {
        successMessage.classList.remove("show");
        successMessage.classList.remove("animated", "fadeIn");
      }, 4000);
    } else {
      event.preventDefault();
    }
  });
});
