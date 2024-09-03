let arrayOfImg = [
    './imgs/cr7.jpg', // 0
    './imgs/karimBenz.jpg',//  1
    './imgs/leo.jpg', // 2
    './imgs/lewa.jpg', // 3
    './imgs/1_Kylian-Mbappe.jpg', // 4
    './imgs/Ruud van Nistelrooy.jpg' // 5
];

let leftImg = document.querySelector('.leftImage');
let middleImg = document.querySelector('.middleImage');
let rightImg = document.querySelector('.rightImage');
let dots = document.querySelector('.dots');

let z = 0; // Index for left image
let i = 1; // Index for middle image
let y = 2; // Index for right image

let paginationDots = [];

function displayImages() {
    leftImg.src = arrayOfImg[z];
    middleImg.src = arrayOfImg[i];
    rightImg.src = arrayOfImg[y];
}

function updateIndices(newIndex) {
    z = (newIndex - 1 + arrayOfImg.length) % arrayOfImg.length; // Left image index
    i = newIndex; // Middle image index
    y = (newIndex + 1) % arrayOfImg.length; // Right image index
}

function displayDots() {
    let cartona = '';
    for (let index = 0; index < arrayOfImg.length; index++) {
        cartona += `<div data-index=${index} class="items"></div>`;
    }
    dots.innerHTML = cartona;
}

function removeActive() {
    paginationDots.forEach(dot => dot.classList.remove('active'));
}

function handleDotClick(event) {
    let newIndex = parseInt(event.target.getAttribute('data-index'));
    updateIndices(newIndex);
    displayImages();
    removeActive();
    paginationDots[newIndex].classList.add('active');
}

function getNextImage() {
    let newIndex = (i + 1) % arrayOfImg.length;
    updateIndices(newIndex);
    console.log(newIndex);

    displayImages();
    removeActive();
    paginationDots[newIndex].classList.add('active');
}

function getPrevImage() {
    let newIndex = (i - 1 + arrayOfImg.length) % arrayOfImg.length;
    updateIndices(newIndex);
    displayImages();
    removeActive();
    paginationDots[newIndex].classList.add('active');
}

function initSlider() {
    displayImages();
    displayDots();
    paginationDots = Array.from(document.querySelectorAll('.items'));
    paginationDots.forEach(dot => dot.addEventListener('click', handleDotClick));
    paginationDots[i].classList.add('active'); // Set the initial active dot
}

initSlider();
