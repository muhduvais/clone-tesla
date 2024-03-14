function showContainer() {
    const header = document.querySelector('.hero-container header');
    const link = document.querySelector('ul.nav-links li');

    link.addEventListener('mouseover', function() {
        header.style.backgroundColor = '#fff'; // Replace '#fff' with your desired color
    });

    link.addEventListener('mouseout', function() {
        header.style.backgroundColor = ''; // Reset the background color when mouse is out
    });
}