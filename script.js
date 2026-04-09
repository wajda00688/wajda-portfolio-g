// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
    .scrollIntoView({behavior:"smooth"});
  });
});

// Hire button
document.getElementById("hireBtn").onclick = () => {
  document.getElementById("contact")
  .scrollIntoView({behavior:"smooth"});
};

// Dark mode
document.getElementById("darkModeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
  .then(() => {
    document.getElementById("formMsg").innerText="✅ Sent!";
  }, () => {
    document.getElementById("formMsg").innerText="❌ Error!";
  });
});

// Typing effect
let text="Frontend Developer";
let i=0;

function type(){
  if(i<text.length){
    document.querySelector(".hero p").innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,80);
  }
}
window.onload=type;
