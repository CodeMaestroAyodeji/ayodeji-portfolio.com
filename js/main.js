// Get the button  
const backToTopBtn = document.getElementById("backToTopBtn");  

// Show or hide the button when scrolling  
window.onscroll = function() {  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {  
        backToTopBtn.style.display = "block"; // Show the button  
    } else {  
        backToTopBtn.style.display = "none"; // Hide the button  
    }  
};  

// Smooth scroll function  
function smoothScroll(duration) {  
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;  
    const scrollStep = currentScroll / (duration / 16.66); // 30 frames per second  

    let scrollInterval = setInterval(function() {  
        if (currentScroll > 0) {  
            window.scrollTo(0, currentScroll);  
            currentScroll -= scrollStep;  
        } else {  
            clearInterval(scrollInterval);  
        }  
    }, 33.33); // 30 frames per second  
}  

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.querySelector(".header_nav");
    const menuLinks = document.querySelectorAll(".header_nav a"); // Select all menu links

    // Toggle menu when clicking the menu button
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking any menu link
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active"); // Remove "active" class to hide menu
        });
    });
});




// Scroll to the top function  
function scrollToTop() {  
    smoothScroll(2000); // Adjust the duration (in milliseconds) for the desired scroll speed  
}

// Copy Right
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Assuming your sections have <section> tags
    const navLinks = document.querySelectorAll(".nav_item a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});
