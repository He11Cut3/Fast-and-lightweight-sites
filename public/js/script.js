document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.option-tab');
    const options = document.querySelectorAll('.option');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        const optionId = this.getAttribute('data-option');
        options.forEach(option => option.classList.remove('active'));
        document.getElementById(`option-${optionId}`).classList.add('active');
      });
    });
    
    const ctaButton = document.querySelector('.cta-button').addEventListener('click', function(e) {
        e.preventDefault();
        const contactsSection = document.getElementById('contacts');
        
        window.scrollTo({
          top: contactsSection.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        this.reset();
      });
    }
  });