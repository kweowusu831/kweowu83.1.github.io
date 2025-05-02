// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Form validation
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      
      // If form is valid, show the success message
      formMessage.classList.remove('d-none');
      
      // Clear the form fields
      form.reset();
      form.classList.remove('was-validated');
      
      // Hide the message after 5 seconds
      setTimeout(function() {
        formMessage.classList.add('d-none');
      }, 5000);
    });
  });