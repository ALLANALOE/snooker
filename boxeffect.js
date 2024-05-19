// Example animation with JavaScript (you can add more animations as needed)
const services = document.querySelectorAll('.feature');

services.forEach((service, index) => {
    service.addEventListener('mouseover', () => {
        service.style.transform = 'scale(1.05)';
    });

    service.addEventListener('mouseout', () => {
        service.style.transform = 'scale(1)';
    });
});
