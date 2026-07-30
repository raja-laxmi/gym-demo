// Smooth navbar shadow on scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background="#000";

    }else{

        navbar.style.background="rgba(0,0,0,.45)";

    }

});
// Fade animation

const cards = document.querySelectorAll(
".membership-item, .facility-item"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition=".8s";

observer.observe(card);

});
/* Trainer Animation */

const trainers = document.querySelectorAll(".trainer-item");

const trainerObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
    threshold:0.2
});

trainers.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(80px)";
card.style.transition="all .8s ease";

trainerObserver.observe(card);

});
/* Gallery Animation */

const galleryItems = document.querySelectorAll(".gallery-item");

const galleryObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
    threshold:0.2
});

galleryItems.forEach(item=>{

item.style.opacity="0";
item.style.transform="translateY(70px)";
item.style.transition="all .8s ease";

galleryObserver.observe(item);

});
const gallery = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const close = document.getElementById("close");

gallery.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});
console.log(close);
close.addEventListener("click",()=>{

lightbox.style.display="none";

});
/* Testimonials Animation */

const testimonials = document.querySelectorAll(".testimonial-item");

const testimonialObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
    threshold:0.2
});

testimonials.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(70px)";

card.style.transition=".8s ease";

testimonialObserver.observe(card);

});
const bmiForm = document.getElementById("bmiForm");

bmiForm.addEventListener("submit", function(e){

    e.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100;

    if(!weight || !height){
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);

    let message = "";

    if(bmi < 18.5){
        message = "🔵 Underweight";
    }
    else if(bmi < 25){
        message = "🟢 Normal Weight";
    }
    else if(bmi < 30){
        message = "🟠 Overweight";
    }
    else{
        message = "🔴 Obese";
    }

    document.getElementById("result").innerHTML =
    `
    <h3>Your BMI: ${bmi}</h3>
    <p>${message}</p>
    `;

});
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! We will contact you soon.");

    contactForm.reset();

});