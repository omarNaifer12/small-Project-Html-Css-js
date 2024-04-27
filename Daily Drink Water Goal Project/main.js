var cups=document.querySelectorAll(".cup-small");
var remained=document.getElementById("remained");
var percentage=document.getElementById("percentage");

var liters=document.getElementById("liters");
var indexForUpdateHeight=-1;


function updateIndex(idx){
if(idx===indexForUpdateHeight){
    indexForUpdateHeight--;
    cups[idx].style.background="white";
}
else{

indexForUpdateHeight=idx;
updateBackroundCups(idx);
}
}
function updateBackroundCups(idx){
    for (let i = 0; i < cups.length; i++) {
        if(i<=idx){
            cups[i].style.background="blue";
        }
        else{
            cups[i].style.background="white"
        }   
    }
} 
function updateHeight(){
    if(indexForUpdateHeight===7){
        remained.style.height=0;
        remained.style.visibility='hidden'
    }
    else{
        remained.style.visibility='visible';
liters.innerText=`${0.25*(8-indexForUpdateHeight-1)}L`
    }
percentage.style.height=`${(330/8)*(indexForUpdateHeight+1)}px`
if(indexForUpdateHeight!==-1)
percentage.innerText=`${(indexForUpdateHeight+1)*100/8}%`
else
percentage.innerText="";
}
cups.forEach(function(cup,idx){
    cup.addEventListener('click',function(){
updateIndex(idx);
updateHeight();
    })
})