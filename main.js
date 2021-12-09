let subImages = document.querySelectorAll('.sub-image');
function changeImageOnClick() {
    if (subImages) {
        subImages.forEach(subImage => {
            subImage.addEventListener('click', (e) => {
                let mainImage = document.querySelector('.main-image');
                // remove all active sub image
                subImages.forEach(subImage => {
                    subImage.classList.remove('sub-image-active');
                });
                // assign src for main image
                mainImage.src = subImage.src;
                subImage.classList.add('sub-image-active');
            });
        });
    }
}

function start() {
    changeImageOnClick();
}

start();