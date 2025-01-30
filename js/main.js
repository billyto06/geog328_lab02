/* -------------------------------
   Tabs / Section Switching
------------------------------- */
function showSection(sectionId) {
    // Hide all content sections
    let sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));

    // Show the clicked/selected section
    document.getElementById(sectionId).classList.add('active');

    // Update the nav link's "active" class
    let links = document.querySelectorAll('nav a');
    links.forEach(link => link.classList.remove('active'));
    document.querySelector(`[href='#${sectionId}']`).classList.add('active');
}

/* -------------------------------
   Home Slideshow (mySlides)
------------------------------- */
let slideIndex = 0;
showSlides(); // Initialize the slideshow

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Wrap around if we go out of bounds
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    // Hide all slides & remove 'active' class from all
    Array.from(slides).forEach(slide => slide.classList.remove('active'));
    Array.from(dots).forEach(dot => dot.classList.remove('active'));

    // Show the current slide, activate the corresponding dot
    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

// Auto-advance the Home slideshow every 5 seconds
setInterval(() => plusSlides(1), 5000);

/* -------------------------------
   Geology Slideshow (mySlidesGeo)
------------------------------- */
let slideIndexGeo = 1;
showSlidesGeo(slideIndexGeo); // Initialize

function plusSlidesGeo(n) {
    showSlidesGeo(slideIndexGeo += n);
}

function currentSlideGeo(n) {
    showSlidesGeo(slideIndexGeo = n);
}

function showSlidesGeo(n) {
    let slides = document.getElementsByClassName("mySlidesGeo");
    let dots = document.getElementsByClassName("Geo"); // The thumbnails
    let captionText = document.getElementById("captionGeo");

    // Wrap around if out of bounds
    if (n > slides.length) { slideIndexGeo = 1; }
    if (n < 1) { slideIndexGeo = slides.length; }

    // Hide all geology slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Remove "active" from all geology thumbnails
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndexGeo - 1].style.display = "block";

    // Highlight the corresponding thumbnail
    dots[slideIndexGeo - 1].className += " active";

    // Set caption text to the thumbnail's alt text
    captionText.innerHTML = dots[slideIndexGeo - 1].alt;
}
