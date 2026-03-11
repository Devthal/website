// Mobile menu toggle (future responsive support)
const navToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(navToggle){
navToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});
}


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior: "smooth"
});

});
});


// Contact form basic validation
const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

const email = form.querySelector("input[type='email']").value;

if(email.length < 5){

alert("Please enter a valid email address");
e.preventDefault();

}

});

}