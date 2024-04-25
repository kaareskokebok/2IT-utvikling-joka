document.addEventListener('DOMContentLoaded', function() {
const images = document.querySelectorAll('.galleri img');
const blurOverlay = document.getElementById('blurOverlay');
images.forEach(image => {
  image.addEventListener('click', function() {
    images.forEach(image => {
        if (image != this){
            image.classList.remove('zoomed');
        }
    })
    this.classList.toggle('zoomed'); // Toggle active class on click
    this.classList.toggle('zoom-out');
    blurOverlay.classList.toggle('blur'); 
    // blurOverlay.style.opacity = 1;
  });
});
});