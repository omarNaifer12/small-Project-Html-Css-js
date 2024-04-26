const notesContainer=document.querySelector(".note_container")
const createBtn=document.querySelector(".btn")
let notes=document.querySelectorAll(".input_box")
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p")
    let image=document.createElement("img")
    inputBox.className="input_box"
    inputBox.setAttribute("contenteditable","true")
    image.src="images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(image)
})
function showNotes()
{
    notesContainer.innerHTML=localStorage.getItem("notes")
}
showNotes()
function updateStorage()
{
    localStorage.setItem("notes",notesContainer.innerHTML)
}

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input_box")
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                updateStorage()

            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak")
    event.preventDefault()
    }
})
