let images = [];
let currentIndex = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", () => {
    loadImages();

    document.getElementById("prevBtn").addEventListener("click", showPreviousImage);
    document.getElementById("nextBtn").addEventListener("click", showNextImage);
    document.getElementById("updateBtn").addEventListener("click", loadImages);
});

function loadImages() {
    // Simulated API data
    const data = {
        "ImageList": [
            {"name": "http://comp125-a4-api.onrender.com/images/photo01.jpg", "time": 3000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo02.jpg", "time": 4000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo03.jpg", "time": 3000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo04.jpg", "time": 5000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo05.jpg", "time": 4000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo06.jpg", "time": 3000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo07.jpg", "time": 4000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo08.jpg", "time": 3000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo09.jpg", "time": 5000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo10.jpg", "time": 4000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo11.jpg", "time": 3000},
            {"name": "http://comp125-a4-api.onrender.com/images/photo12.jpg", "time": 4000}
        ]
    };

    images = data.ImageList;
    currentIndex = 0;
    clearInterval(intervalId); // Clear any existing intervals
    showImage();
    startAutoRotation();
}

function showImage() {
    const imageDisplay = document.getElementById("imageDisplay");
    const currentImage = images[currentIndex];
    imageDisplay.src = currentImage.name;
    imageDisplay.alt = `Image ${currentIndex + 1}`; // Corrected template string usage
}

function startAutoRotation() {
    const currentImage = images[currentIndex];
    clearInterval(intervalId); // Clear any existing intervals
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
        startAutoRotation(); // Restart the rotation with the new image's time
    }, currentImage.time);
}

function showPreviousImage() {
    clearInterval(intervalId);
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
    startAutoRotation(); // Restart the rotation after manual change
}

function showNextImage() {
    clearInterval(intervalId);
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
    startAutoRotation(); // Restart the rotation after manual change
}
