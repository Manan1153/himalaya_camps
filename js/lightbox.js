// lightbox.js

// Function to open the lightbox
function openLightbox(imageSrc) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightbox-image");

    lightbox.style.display = "block";
    lightboxImage.src = imageSrc;
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

//Back button
document.getElementById("backButton").addEventListener("click", function() {
    window.history.back();
  });