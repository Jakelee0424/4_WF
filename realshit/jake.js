const containerForSlide = document.getElementById("containerForSlide");

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


//------------------------------------------------------

const menuNameElements = document.querySelectorAll(".menuName");
const arrowElements = document.querySelectorAll(".arrow");

menuNameElements.forEach(function (menuName, index) {
    const arrow = arrowElements[index];

    menuName.addEventListener("mouseover", function () {
        arrow.style.visibility = "visible";
        arrow.style.opacity = "1";
    });
  
    menuName.addEventListener("mouseout", function () {
      arrow.style.visibility = "hidden";
      arrow.style.opacity = "0";
    });

});


//------------------------------------------------------

aboutMe.addEventListener("click", function() {
    
    index += 1;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});


nameTag.addEventListener("click", function(){
    
    index -= 1;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

// contact -----------------------------------------------------------------

contact.addEventListener("click", function() {
    
    index += 2;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});

nameTag2.addEventListener("click", function(){
    
    index -= 2;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});


const emailIcon = document.getElementById("emailIcon");
const emailAdd = document.getElementById("emailAdd");
let move = false;

emailIcon.addEventListener("click", function(){

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


// skills -----------------------------------------------------------------


skills.addEventListener("click", function(){
    
    index += 3;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
})

nameTag3.addEventListener("click", function(){

    index -= 3;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
});


const iconAtElements = document.querySelectorAll(".iconAt");
const skillNameElements = document.querySelectorAll(".skillName");

iconAtElements.forEach(function (iconAt, index) {
    const skillName = skillNameElements[index];

    iconAt.addEventListener("mouseover", function () {
      iconAt.style.filter = "grayscale(0%)";
      skillName.style.visibility = "visible";
      skillName.style.opacity = "1";
    });
  
    iconAt.addEventListener("mouseout", function () {
      iconAt.style.filter = "grayscale(100%)";
      skillName.style.visibility = "hidden";
      skillName.style.opacity = "0";
    });

});
