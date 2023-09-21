const containerForSlide = document.getElementById("containerForSlide");

const contact = document.getElementById("contact");
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

const emailIcon = document.getElementById("emailIcon");
const emailAdd = document.getElementById("emailAdd");
let move = false;

emailIcon.addEventListener("click", function(){

    if (move == false) {
        emailIcon.style.transform = "translateX(-200px)"
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
    
    index += 2;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
})

nameTag2.addEventListener("click", function(){

    index -= 2;
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

// projects ---------------------------------------------------------------------------


projects.addEventListener("click", function(){
    
    index += 3;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    
})


let left = document.getElementById("left");
let right = document.getElementById("right");
let projectsContainer = document.getElementById("projectsContainer");
let translationValue = 0;

left.addEventListener("click", () => {
    if (translationValue == 0) {
        return;
    }

    translationValue += 1300; 
    projectsContainer.style.transform = `translate3d(${translationValue}px, 0, 0)`;
});

right.addEventListener("click", () => {
    translationValue -= 1300; 
    projectsContainer.style.transform = `translate3d(${translationValue}px, 0, 0)`;
});

nameTag3.addEventListener("click", function(){
    
    index -= 3;
    containerForSlide.style.transform = `translate3d(-${100 * index}vw, 0, 0)`;
    projectsContainer.style.transform = `translate3d(0, 0, 0)`;
    translationValue = 0;
    
});

let img = document.getElementById("cloneCodingImg");
let img2 = document.getElementById("teamProjectImg");
let p = document.getElementById("cloneCoding");
let p2= document.getElementById("teamProject");


document.getElementById("youtubeContainer").addEventListener("mouseover", ()=>{

    img.style.opacity = '1';
    img.style.zIndex = '0';
    p.style.zIndex = '-1';

    img.style.transitionDuration = "0.5s";
    p.style.transitionDuration = "1s";
    
});


document.getElementById("youtubeContainer").addEventListener("mouseout", ()=>{

    img.style.opacity = '0.5';
    img.style.zIndex = '-1';
    p.style.zIndex = '1';
    
    img.style.transitionDuration = "0.5s";
    p.style.transitionDuration = "1s";

});


document.getElementById("teamProjectContainer").addEventListener("mouseover", ()=>{

    img2.style.opacity = '1';
    img2.style.zIndex = '0';
    p2.style.zIndex = '-1';

    img2.style.transitionDuration = "0.5s";
    p2.style.transitionDuration = "1s";
    
});


document.getElementById("teamProjectContainer").addEventListener("mouseout", ()=>{

    img2.style.opacity = '0.5';
    img2.style.zIndex = '-1';
    p2.style.zIndex = '1';
    
    img2.style.transitionDuration = "0.5s";
    p2.style.transitionDuration = "1s";

});




// 마우스 효과 --------------------------------------------------------------- 
var colour="random"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var sparkles=50;
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y+1)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    starx[i]+=(i%5-2)/5;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    tinyx[i]+=(i%5-2)/5;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  return (div);
}

function newColour() {
  var c=new Array();
  c[0]=255;
  c[1]=255;
  c[2]=255;
  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}
