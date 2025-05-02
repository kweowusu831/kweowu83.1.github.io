document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
      
      formMessage.classList.remove('d-none');
      
      form.reset();
      form.classList.remove('was-validated');
      
      setTimeout(function() {
        formMessage.classList.add('d-none');
      }, 5000);
    });
  });