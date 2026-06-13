/* ===================================
PRELOADER
=================================== */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

/* ===================================
STICKY NAVBAR
=================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ===================================
COUNTER ANIMATION
=================================== */

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounters() {

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const speed = target / 100;

        const updateCount = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCount);

            } else {

                counter.innerText = target.toLocaleString() + "+";

            }

        };

        updateCount();

    });

}

window.addEventListener("scroll", () => {

    const achievement =
        document.querySelector(".achievement-section");

    if (!achievement) return;

    const top =
        achievement.getBoundingClientRect().top;

    if (
        top < window.innerHeight &&
        !started
    ) {

        startCounters();

        started = true;

    }

});

/* ===================================
BMI CALCULATOR
=================================== */

const bmiBtn =
document.getElementById("calculateBMI");

if (bmiBtn) {

    bmiBtn.addEventListener("click", () => {

        const height =
        parseFloat(
        document.getElementById("height").value
        );

        const weight =
        parseFloat(
        document.getElementById("weight").value
        );

        const bmiResult =
        document.getElementById("bmiResult");

        const bmiCategory =
        document.getElementById("bmiCategory");

        if (!height || !weight) {

            bmiResult.innerHTML =
            "Please enter values";

            bmiCategory.innerHTML = "";

            return;

        }

        const bmi =
        weight /
        ((height / 100) * (height / 100));

        bmiResult.innerHTML =
        `BMI: ${bmi.toFixed(1)}`;

        if (bmi < 18.5) {

            bmiCategory.innerHTML =
            "Underweight";

            bmiCategory.style.color =
            "#ff9800";

        }

        else if (bmi < 25) {

            bmiCategory.innerHTML =
            "Normal Weight";

            bmiCategory.style.color =
            "#00e676";

        }

        else if (bmi < 30) {

            bmiCategory.innerHTML =
            "Overweight";

            bmiCategory.style.color =
            "#ffc107";

        }

        else {

            bmiCategory.innerHTML =
            "Obese";

            bmiCategory.style.color =
            "#ff5252";

        }

    });

}

/* ===================================
SMOOTH SCROLL
=================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

});

});

/* ===================================
ACTIVE MENU LINK
=================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 200;

if(scrollY >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(
link.getAttribute("href")
=== `#${current}`
){

link.classList.add("active");

}

});

});

/* ===================================
SCROLL REVEAL
=================================== */

const revealElements =
document.querySelectorAll(
".program-card, .why-card, .trainer-card, .equipment-card-large, .transformation-card, .plan-card, .testimonial-card"
);

function reveal() {

revealElements.forEach(el => {

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
reveal
);

reveal();

/* ===================================
MOBILE MENU
=================================== */

const menuBtn =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("mobile-open");

});

}

/* ===================================
GALLERY CLICK EFFECT
=================================== */

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

galleryImages.forEach(img => {

img.addEventListener("click",()=>{

img.style.transform =
"scale(1.08)";

setTimeout(()=>{

img.style.transform =
"scale(1)";

},300);

});

});

/* ===================================
TESTIMONIAL AUTO EFFECT
=================================== */

const testimonials =
document.querySelectorAll(
".testimonial-card"
);

let testimonialIndex = 0;

function testimonialRotate(){

if(testimonials.length === 0)
return;

testimonials.forEach(card=>{

card.style.opacity=".5";

});

testimonials[
testimonialIndex
].style.opacity="1";

testimonialIndex++;

if(
testimonialIndex >=
testimonials.length
){

testimonialIndex = 0;

}

}

setInterval(
testimonialRotate,
3000
);

testimonialRotate();

/* ===================================
CONTACT FORM
=================================== */

const contactButton =
document.querySelector(
".contact-form button"
);

if(contactButton){

contactButton.addEventListener(
"click",
(e)=>{

e.preventDefault();

alert(
"Thank you! Your message has been received. Titan Fitness will contact you soon."
);

}
);

}

/* ===================================
PARALLAX HERO
=================================== */

window.addEventListener(
"scroll",
()=>{

const heroImage =
document.querySelector(
".hero-image img"
);

if(heroImage){

heroImage.style.transform =
`translateY(${window.scrollY * 0.05}px)`;

}

}
);

/* ===================================
CURRENT YEAR AUTO UPDATE
=================================== */

const year =
new Date().getFullYear();

const footerText =
document.querySelector(
".footer-bottom p"
);

if(footerText){

footerText.innerHTML =
`© ${year} Titan Fitness. All Rights Reserved.`;

  }
