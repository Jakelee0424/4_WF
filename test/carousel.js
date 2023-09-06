const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const carousel = document.querySelector(".carousel");

let index = 0;

prevBtn.addEventListener("click", function() {

    if(index == 0) return;
    index -= 1;
    
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
});

nextBtn.addEventListener("click", function() {

    if(index == 2) return;
    index += 1;
    
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
});