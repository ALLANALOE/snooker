// Select all navigation links that should trigger smooth scrolling
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listeners to the navigation links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default link behavior
    
    const targetId = link.getAttribute('href'); // Get the target section ID
    const targetSection = document.querySelector(targetId); // Find the target section
    
    if (targetSection) {
      // Calculate the offset of the target section from the top of the page
      const offset = targetSection.getBoundingClientRect().top + window.scrollY;
      
      // Scroll to the target section with smooth behavior
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  });
});
