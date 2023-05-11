document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("emailInput").value;
    sendEmail(email);
    document.getElementById("subscribeForm").reset();
  });
  
  function sendEmail(email) {
    // Send the email using your preferred method or API
    // You can use AJAX or any other technology to send the email
    // This is just a placeholder function
    alert("Thank you for subscribing! We have sent a confirmation email to " + email);
  }
  