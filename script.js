var createbtn = document.querySelector(".createbtn")
var box = document.querySelector(".addcontent")
var recentbox = document.querySelector(".recentdelete")


// deletenote function delete the not and add the note in recent delete box
function deletenote(value , box, para){
        // console.log(value)

        var recyclepara = document.createElement("p")
        var restorebtn = document.createElement("img")
        var permanentedeletebtn = document.createElement("img")

        recyclepara.classList.add("para")
        recyclepara.textContent = value
        restorebtn.src = "https://cdn.hugeicons.com/icons/restore-bin-stroke-rounded.svg"
        permanentedeletebtn.src = "https://cdn.hugeicons.com/icons/delete-04-stroke-rounded.svg"
        restorebtn.classList.add("restore")
        permanentedeletebtn.classList.add("permanentdelete")

        recyclepara.appendChild(restorebtn)
        recyclepara.appendChild(permanentedeletebtn)
        recentbox.appendChild(recyclepara)


        restorebtn.addEventListener("click", ()=>{
            restorenote(value,recyclepara)
        })

        permanentedeletebtn.addEventListener("click", ()=>{
            recentbox.removeChild(recyclepara)
        })

        box.removeChild(para)

}


// restorenot func. remove the note from recent delete box and add to main box
function restorenote(value,recyclepara){
    var para = document.createElement("p")
    var deletebtn =document.createElement("img");

    para.classList.add("para");
    para.setAttribute("contenteditable" , "true")
    deletebtn.classList.add("deletebtn")
    deletebtn.src="https://cdn.hugeicons.com/icons/delete-04-stroke-rounded.svg"

    para.textContent=value
    para.appendChild(deletebtn)
    box.appendChild(para)

    deletebtn.addEventListener("click", ()=>{ 
        paratext = para.textContent
        deletenote(paratext, box, para)

    })

    recentbox.removeChild(recyclepara)
}

//when create btn clicked it will create a new note
createbtn.addEventListener("click", function(){
    var para = document.createElement("p")
    var deletebtn =document.createElement("img");

    para.classList.add("para");
    para.setAttribute("contenteditable" , "true")
    deletebtn.classList.add("deletebtn")
    deletebtn.src="https://cdn.hugeicons.com/icons/delete-04-stroke-rounded.svg"

    para.appendChild(deletebtn)
    box.appendChild(para)

    deletebtn.addEventListener("click", ()=>{ 
        paratext = para.textContent
        deletenote(paratext, box, para)

    })

})





