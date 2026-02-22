(function () {
    'use strict';

    var body = document.body;

    // --- Color swatch toggle ---
    var swatchBlack = document.querySelector('[data-target="swatch-black"]');
    var swatchWhite = document.querySelector('[data-target="swatch-white"]');
    var colorInput  = document.querySelector('input[name="color"]');

    function setColor(color) {
        colorInput.value = color;
        if (color === 'white') {
            body.classList.add('white-shirt');
            swatchWhite.classList.add('active');
            swatchBlack.classList.remove('active');
        } else {
            body.classList.remove('white-shirt');
            swatchBlack.classList.add('active');
            swatchWhite.classList.remove('active');
        }
    }

    if (swatchBlack) {
        swatchBlack.addEventListener('click', function () { setColor('black'); });
    }
    if (swatchWhite) {
        swatchWhite.addEventListener('click', function () { setColor('white'); });
    }

    // Initialize swatch active state from current colorInput value
    setColor(colorInput ? colorInput.value : 'black');

    // --- Batch size select updates quantity range ---
    var batchSelect  = document.querySelector('[data-target="batch-select"]');
    var qtyInput     = document.querySelector('input[name="quantity"]');

    if (batchSelect && qtyInput) {
        batchSelect.addEventListener('change', function () {
            if (this.value === 'large') {
                qtyInput.min   = 13;
                qtyInput.max   = 50;
                qtyInput.value = 13;
            } else {
                qtyInput.min   = 1;
                qtyInput.max   = 12;
                qtyInput.value = 1;
            }
        });
    }

    // --- Activate buy button once size is chosen ---
    var sizeSelect = document.querySelector('select[name="size"]');
    var buyBtn     = document.querySelector('.btn.buy');

    function updateBuy() {
        if (sizeSelect && buyBtn) {
            if (sizeSelect.value) {
                buyBtn.classList.add('active');
            } else {
                buyBtn.classList.remove('active');
            }
        }
    }

    if (sizeSelect) {
        sizeSelect.addEventListener('change', updateBuy);
    }
}());
