const containerForSlide = document.getElementById("containerForSlide");

const aboutMe = document.getElementById("aboutMe");
const contact = document.getElementById("contact");
const email = document.getElementById("email");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");

const nameTag = document.getElementsByClassName("nameTag")[1];
const nameTag2 = document.getElementsByClassName("nameTag")[2];
const nameTag3 = document.getElementsByClassName("nameTag")[3];
const nameTag4 = document.getElementsByClassName("nameTag")[4];

let index = 0;

// About me -------------------------------------------------------

aboutMe.addEventListener("click", function(){

    index += 1;
    containerForSlide.style.transform = `translateX(-${100 * index}vw)`;
    
});

nameTag.addEventListener("click", function(){
    
    index -= 1;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;

});


// Contact -----------------------------------------------------------


contact.addEventListener("click", function(){
    
    index += 2;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

nameTag2.addEventListener("click", function(){
    
    index -= 2;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

const emailIcon = document.getElementById("emailIcon");
const emailAdd = document.getElementById("emailAddress");
let move = false;

email.addEventListener("click", function(){

    if (move == false) {
        emailIcon.style.transform = "translateY(-300px)"
        emailAdd.style.visibility = "visible";
        emailAdd.style.opacity = "1";
        move = true;
    }else{
        emailIcon.style.transform = "translateY(0px)"
        emailAdd.style.visibility = "hidden";
        emailAdd.style.opacity = "0";
        move = false;
    }

     emailIcon.style.transitionDuration = "1s";
});


// Skills -----------------------------------------------------------


skills.addEventListener("click", function(){

    index += 3;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

nameTag3.addEventListener("click", function(){
    
    index -= 3;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;

});

const skillsIcon = document.getElementsByClassName("bfIcon");
const skillsName = document.getElementsByClassName("skillsName");

// skillsIcon.addEventListener("mouseover", function(){



// });


// Projects -----------------------------------------------------------

projects.addEventListener("click", function(){

    index += 4;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

nameTag4.addEventListener("click", function(){
    
    index -= 4;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;

});
