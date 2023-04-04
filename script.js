const article = document.querySelector('.article');
const article1 = document.querySelector('.article1');
const article2 = document.querySelector('.article2');
const article3 = document.querySelector('.article3');

article.addEventListener('click', function(event) {
    article.classList.add('active');
    article1.classList.remove('active');
    article2.classList.remove('active');
    article3.classList.remove('active');
});

article1.addEventListener('click', function(event) {
    article1.classList.add('active');
    article.classList.remove('active');
    article2.classList.remove('active');
    article3.classList.remove('active');
});
article2.addEventListener('click', function(event) {
    article2.classList.add('active');
    article.classList.remove('active');
    article1.classList.remove('active');
    article3.classList.remove('active');
});
article3.addEventListener('click', function(event) {
    article3.classList.add('active');
    article.classList.remove('active');
    article1.classList.remove('active');
    article2.classList.remove('active');
});

// const introHolder = document.querySelector('.intro-holder');
// const introBlocks = document.querySelectorAll('.intro-block');
// const introDots = document.querySelectorAll('.intro-dot');
// const introArrows = document.querySelectorAll('.intro-arrow');
// let currentSlide = 0;
//
// // Add click event listener to dots
// introDots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         goToSlide(index);
//     });
// });
//
// // Add click event listener to arrows
// introArrows.forEach(arrow => {
//     arrow.addEventListener('click', event => {
//         event.preventDefault();
//         if (arrow.classList.contains('prev')) {
//             goToSlide(currentSlide - 1);
//         } else if (arrow.classList.contains('next')) {
//             goToSlide(currentSlide + 1);
//         }
//     });
// });
//
// // Show slide and update dots
// function goToSlide(slideIndex) {
//     if (slideIndex < 0) {
//         slideIndex = introBlocks.length - 1;
//     } else if (slideIndex >= introBlocks.length) {
//         slideIndex = 0;
//     }
//     introHolder.style.transform = `translateX(-${slideIndex * 100}%)`;
//     introDots[currentSlide].classList.remove('active');
//     introDots[slideIndex].classList.add('active');
//     currentSlide = slideIndex;
// }
//
// // Auto slide every 5 seconds
// setInterval(() => {
//     goToSlide(currentSlide + 1);
// }, 5000);


