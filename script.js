let screen=document.querySelector(".screen-input")

function addval(elementval){
    screen.value += elementval;
}
function clearval(){
    screen.value = "";
}   
function delval(){
    screen.value = screen.value.slice(0,-1);
}
function solve(){
    try{screen.value=eval(screen.value)}
    catch(err){
        alert("Invalid");
        screen.value="Error"
    }
}
let clicksound= new Audio("click-sound.wav");

function playsound(){
    clicksound.currentTime=0;
    clicksound.play();
}