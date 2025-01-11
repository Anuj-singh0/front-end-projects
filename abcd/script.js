var istatus = document.querySelector("h5")
var addfriend = document.querySelector("#add")
var check = 0


addfriend.addEventListener("click",function(){
    if(check==0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        addfriend.innerHTML="Remove"
        check = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red" 
        addfriend.innerHTML="Add Friend"
        check = 0
    }
})