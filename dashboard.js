
const dateElement=document.getElementById("current-date");
let date=new Date();
let formetedDate= date.toLocaleString('en-US', { month: 'short',
day:'2-digit',
year:'numeric',
hour:'numeric',
minute:'numeric',
hour12:true,
});
dateElement.innerText=formetedDate;
// oz-output value
const production_value=document.querySelector(".oz-output");



// percent load
let interval;
const percentShow=document.querySelector(".percent-shows");
let counter=0;
function count(){
if(counter==66){
    production_value.style.color="black";
    clearInterval();
}
else{
percentShow.innerText=counter+"%";
counter+=1;
if(counter%2===0){
    production_value.style.color="gray";
}
else{
    production_value.style.color="black";
}
}
}
 setInterval(count,36);


// ARROW POINTER

let speed=0;
const arrow=document.querySelector(".arrow");
let previousSpeed=0;
let randombarrer=Math.floor(Math.random()*100)+80;
let scaling=0;

function addclass(){
    let newclass="speed_"+speed;
      let previousClass="speed_"+previousSpeed;
      if(arrow.classList.contains(previousClass)){
         arrow.classList.remove(previousClass);
         arrow.classList.add(newclass);
         previousSpeed=speed;
      }
}

function changeActive(){
      
   let tempClass="scale-"+scaling;
   const scaleElemet=document.getElementsByClassName(tempClass)[0];
   scaleElemet.classList.toggle("active"); 
}

function increment(){
if(speed<randombarrer){
    
speed=speed+10;
scaling=scaling+1;
changeActive();
arrow.style.transform="rotate("+speed+"deg)";
addclass();
}
else{

    clearInterval();
}
}
setInterval(increment,50);

// graph scaling

const rootProperty=document.querySelector(":root");
const gsCaptions=document.querySelectorAll(".gs-caption");
const widthGraphLines=document.getElementById("graph-status-right");
const computedStyle=window.getComputedStyle(widthGraphLines);
let width=parseFloat(computedStyle.getPropertyValue("width"));

function incrementScaling(){
    
gsCaptions.forEach((hozLine) => {
    let tempHozLine=hozLine;
let randIncre=Math.floor(Math.random() * (width-50));
hozLine.style.setProperty("--scaling-width",randIncre+"px");
});
}

incrementScaling();

// 
const barElement=document.querySelector("#grid i.three-bars");
let crossEnable=false;
const sliderLeft=document.querySelector("#grid #left-section");

function slidebar(){
if(!crossEnable){
barElement.classList.remove("fa-bar");
barElement.classList.add("fa-xmark");
sliderLeft.style.display="block";
crossEnable=true;
}

else if(crossEnable){
    barElement.classList.add("fa-bar");
    barElement.classList.remove("fa-xmark");
    crossEnable=false;
    sliderLeft.style.display="none";
    }
    



}
barElement.addEventListener("click",slidebar);