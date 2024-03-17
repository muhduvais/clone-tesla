function showContainer() {
    const header = document.querySelector('.hero-container header');
    const links = document.querySelectorAll('ul.nav-links li');
    const linksa = document.querySelectorAll('ul.nav-links li a');

    links.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            header.style.backgroundColor = '#fff'; // Replace '#fff' with your desired color
        });
    
        link.addEventListener('mouseout', function() {
            header.style.backgroundColor = ''; // Reset the background color when mouse is out
        });
    })

    linksa.forEach(function(linka) {
        linka.addEventListener('mouseover', function() {
            linka.style.color = '#000'; // Replace '#fff' with your desired color
        });
    
        linka.addEventListener('mouseout', function() {
            linka.style.color = '#fff'; // Reset the background color when mouse is out
        });
    })
}

showContainer();