// Function to open image in full view
function openimg(img) {
    const fullimg = document.getElementById('fullimg');
    const fullimg1 = document.getElementById('fullimg1');
    const fullimgDescription = document.getElementById('fullimg-description');
    fullimg.style.display = 'flex'; // Show the full image container
    fullimg1.src = img.src; // Set the image source
    fullimg1.setAttribute('data-current-index', getImageIndex(img.src)); // Set the current index
    fullimgDescription.textContent = img.getAttribute('data-description'); // Set the description
}

// Function to close the full image view
function closeimg() {
    const fullimg = document.getElementById('fullimg');
    fullimg.style.display = 'none'; // Hide the full image container
}

// Function to move to the previous image
function moveleft() {
    const fullimg1 = document.getElementById('fullimg1');
    const fullimgDescription = document.getElementById('fullimg-description');
    const currentIndex = parseInt(fullimg1.getAttribute('data-current-index'));
    const images = document.querySelectorAll('.img-gallery img');
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    fullimg1.src = images[newIndex].src;
    fullimg1.setAttribute('data-current-index', newIndex);
    fullimgDescription.textContent = images[newIndex].getAttribute('data-description');
}

// Function to move to the next image
function moveright() {
    const fullimg1 = document.getElementById('fullimg1');
    const fullimgDescription = document.getElementById('fullimg-description');
    const currentIndex = parseInt(fullimg1.getAttribute('data-current-index'));
    const images = document.querySelectorAll('.img-gallery img');
    const newIndex = (currentIndex + 1) % images.length;
    fullimg1.src = images[newIndex].src;
    fullimg1.setAttribute('data-current-index', newIndex);
    fullimgDescription.textContent = images[newIndex].getAttribute('data-description');
}

// Helper function to get the index of the image
function getImageIndex(src) {
    const images = document.querySelectorAll('.img-gallery img');
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === src) {
            return i;
        }
    }
    return 0;
}

// Function to apply the selected color as background
function applyColor(color) {
    document.body.style.backgroundColor = color;
    document.documentElement.style.setProperty('--main-color', color);
}

// Function to apply the selected font family
function applyFont(font) {
    console.log(`Applying font: ${font}`); // Debugging log
    document.body.style.fontFamily = font;
    document.documentElement.style.setProperty('--main-font', font);
}

// Event listener for color buttons
document.querySelectorAll('.theme-button').forEach(button => {
    button.addEventListener('click', function() {
        applyColor(this.getAttribute('data-color'));
    });
});

// Event listener for font buttons
document.querySelectorAll('.font-button').forEach(button => {
    button.addEventListener('click', function() {
        applyFont(this.getAttribute('data-font'));
    });
});
