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

function copyVoucher() {
    let btnVouchers = document.querySelectorAll('.btn-voucher');
    if (btnVouchers) {
        btnVouchers.forEach(btnVoucher => {
            btnVoucher.addEventListener('click', function (e) {
                let code = btnVoucher.parentElement.querySelector('.code');
                btnVoucher.textContent = 'Copied';
                navigator.clipboard.writeText(code.innerText);
            });
        });
    }
}
function start() {
    changeImageOnClick();
    copyVoucher();
}

start();