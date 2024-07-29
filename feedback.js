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

    if (validation) {
      // Prevent actual form submission
      event.preventDefault(); 

      // Get additional comments
      const comments = document.getElementById("additional-comments").value.trim();

      // Define email subject and body
      const subject = 'Feedback Form Received';
      const body = `Dear ${name},\n\nWe have received your feedback. Below are the details of your feedback submission:\n
                    1. First Visit: ${firstVisit.value}\n
                    2. Informative and Easy to Navigate: ${informative.value}\n
                    3. Areas for Improvement: ${document.getElementById("improvements").value}\n
                    4. Satisfaction: ${satisfaction.value}/10\n
                    5. Would Recommend: ${recommend.value}\n
                    6. Updates: ${updates}\n
                    7. Additional Comments: ${comments || "No additional comments provided."}\n\n
                    Thank you for your time :)`;

      // Create and open mailto link
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      // Display success message
      const successMessage = document.getElementById("success-message");
      form.reset();
      successMessage.classList.add("show");
      successMessage.classList.add("animated", "fadeIn");
      setTimeout(() => {
        successMessage.classList.remove("show");
        successMessage.classList.remove("animated", "fadeIn");
      }, 4000);
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 3000);  // 3-second delay before opening the email window
    } else {
      event.preventDefault();
    }
  });
});
