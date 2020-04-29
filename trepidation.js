const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        //Toggle Nav
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
        //Animate Links
        navLinks.forEach((link, trepidation) => {
            link.style.animation = 'navLinkFade 0.5s ease forwards $(trepidation / 7 + 0.3)s';
            
        });
    };
