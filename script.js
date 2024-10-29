function scrollToNavbar() {
    const navbar = document.querySelector('.navbar'); 
    if (navbar) {
        navbar.scrollIntoView({ behavior: 'smooth' });
    }
}

