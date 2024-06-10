const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    let currentImageIndex = 0;

    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            if (i === index) {
                images[i].style.display = 'block';
            } else {
                images[i].style.display = 'none';
            }
        }
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    }

    showImage(currentImageIndex);
    setInterval(nextImage, 1500);
