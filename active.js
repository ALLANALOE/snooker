const currentPageUrl = window.location.href;

  // Get all navigation links
  const navLinks = document.querySelectorAll("nav a");

  // Add "active" class to the link corresponding to the current page
  navLinks.forEach((link) => {
    if (link.href === currentPageUrl) {
      link.classList.add("active");
    }
  });