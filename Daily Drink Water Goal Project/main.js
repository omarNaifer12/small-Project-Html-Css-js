var cups=document.getElementsByClassName("cup-small");
var mainCup=document.getElementById("remained");
var percentages=document.getElementById("percentage");
var percentage=[12.5,25,37.5,50,62.5,75,87.5,100];
var liters=document.getElementById("liters");

function editBackroundColor(){

   var percentage=0;
    return function progress(){
        percentage++;
        if(percentage<=12.5){
            mainCup.style.height=percentage+"%";
            mainCup.style.background="#00ffff"
            setTimeout(progress,0)
        }
    }
}
function editBackroundColors(percentage){
    mainCup.style.height=percentage+"%";
    mainCup.style.background="#00ffff"
}
var edit=editBackroundColor();
setTimeout(edit,50)
for (let i = 0; i < cups.length; i++) {
    cups[i].addEventListener("click",function(event){
        editBackroundColors(percentage[i]);
        percentages.innerText=percentage[i].toString();
    })
}
mmmkkk