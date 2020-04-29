const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    //Animate Links
    navLinks.forEach((link, navbarcool) => {
        link.style.animation = 'navLinkFade 0.5s ease forwards $(navbarcool / 7)s';
        console.log(navbarcool / 7)

    })
}

navSlide();