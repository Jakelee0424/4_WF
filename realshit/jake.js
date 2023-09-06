const carousel = document.getElementById("carousel");

const contact = document.getElementById("contact");
const contactPage = document.getElementById("contact-page");
const aboutMe = document.getElementById("aboutMe");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const menuPage = document.getElementById("menu-page")

const nameTag = document.getElementsByClassName("nameTag")[1];
const nameTag2 = document.getElementsByClassName("nameTag")[2];
const nameTag3 = document.getElementsByClassName("nameTag")[3];


let index = 0;


aboutMe.addEventListener("click", function() {

    index += 1;
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;

});


nameTag.addEventListener("click", function(){

    index -= 1;
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;

});

// function makeClone(){
// }
// makeClone();

// contact.addEventListener("mouseover", function(){
//     carousel.insertBefore(contactPage, carousel.firstChild);
    
// })


contact.addEventListener("click", function() {
    
    index += 2;
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;

});

nameTag2.addEventListener("click", function(){

    index -= 2;
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

skills.addEventListener("click", function(){
    
    index += 3;
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
})

nameTag3.addEventListener("click", function(){

    index -= 3;
    carousel.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

