const blades = Array.from(document.querySelectorAll(".blade-up1,.blade-up2,.blade-up3"));
let angle=1;

function getRotationDegrees(matrix){
    const values = matrix.split('(')[1].split(')')[0].split(',');
    const a = values[0];
    const b = values[1];
    const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    return (angle < 0 ? angle + 360 : angle); // Normalize angle to po
}

function rotateBlades() {
    blades.forEach((blade) => {
        const initialRotation = getComputedStyle(blade).transform;
        const initialRotationValue = getRotationDegrees(initialRotation);
        const totalRotation = (initialRotationValue + angle);
        blade.style.transform = `rotate(${totalRotation}deg)`;
    });
   
}
setInterval(rotateBlades,100);

                // Popup Effect

const sliderElement=document.getElementById("slider");
const circleElement=document.getElementById("circle");
const popupElement=document.getElementById("popup");
let loginStatus=false;
const loginButton=document.querySelector("#slider .loginBtn");
const crossIcon=document.querySelector("#popup .bx");

function popup(){
sliderElement.style.filter="blur(5px)";
circleElement.style.filter="blur(5px)";
popupElement.style.display="block";

}

function cross(){
    sliderElement.style.filter="none";
    circleElement.style.filter="none";
    popupElement.style.display="none";
   

    }
loginButton.addEventListener("click",popup);
crossIcon.addEventListener("click",cross)

// form validation

const form=document.querySelector("form");
const emailField=form.querySelector(".email-field");
const emailInput=emailField.querySelector("#email-address");
const passwordField=form.querySelector(".password-field");
const passwordInput=passwordField.querySelector("#password");
const emailError=document.querySelector(".email-error");
const passwordError=document.querySelector("article");
let hideIcon=passwordField.querySelector(".show-hide");
let hideStatus=true;

// Open dashboard
function openDashboard(){
 let pageUrl="file:///D:/WebDev-ProjectPlaybook-/WindProject/Dashboard.html";
 window.open(pageUrl,"_blank")


}

// check email validation
function check_emailField(){
const pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!emailInput.value.match(pattern)){
   emailError.classList.add("invalid");

   return;
   
}
emailError.classList.remove("invalid");
cross();
openDashboard();
}

// function check_emailField(){

//     if(!emailInput.value.match(pattern)){
//        emailError.classList.add("invalid");
//        return;
//     }
//     emailError.classList.remove("invalid");
//     }



form.addEventListener("submit",(e) => {

e.preventDefault();
check_emailField();
emailInput.addEventListener("keyup",check_emailField);

});



// Hide Unhide
function hideUnHide(){

if(hideStatus==true){
hideIcon.classList.add("bx-show");
hideIcon.classList.remove("bxs-hide");
     hideStatus=false;
     return passwordInput.type="text";
}

 else if(hideStatus==false){
    hideIcon.classList.add("bxs-hide");
    hideIcon.classList.remove("bx-show");
    hideStatus=true;
    passwordInput.type="password";
}
}



hideIcon.addEventListener("click",hideUnHide);

















