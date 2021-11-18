//const { link } = require("fs");

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            //link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
};

navSlide();

//links from pictures

$("#landingImages1").click(function() {
    window.location.href = 'captainAmerica.html';
});

$("#landingImages2").click(function() {
    window.location.href = 'ironMan.html';
});

$("#landingImages3").click(function() {
    window.location.href = 'thor.html';
});

$("#landingImages4").click(function() {
    window.location.href = 'hulk.html';
});

$("#landingImages5").click(function() {
    window.location.href = 'blackWidow.html';
});

$("#landingImages6").click(function() {
    window.location.href = 'hawkeye.html';
});

$("#navImage").click(function() {
    window.location.href = 'index.html';
});
