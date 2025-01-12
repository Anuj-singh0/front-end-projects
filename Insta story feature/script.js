var arr = [
    {
        dp: "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg?cs=srgb&dl=pexels-harsh-raj-gond-218020-1485031.jpg&fm=jpg",story: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-alipazani-2836486.jpg&fm=jpg"
    },
    {
        dp: "https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROJ5g3KJ2n3L8N84MNWT6WBKScPHIl8K4Ozmm6dGfMb71Of776bOMWuegudoNnHW8wfJQ&usqp=CAU"
    },
    {
        dp: "https://images.squarespace-cdn.com/content/v1/6204821bfe06b76898b431c5/80221678-0539-4495-8007-0096677e1eca/image00016.jpeg",story: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZgxWEdxW_W2gepE3ZSINeYJBmC4-va_Wc2QblLWoTpVJ-EkKtEb5wzNc_-t5rb4AGs8&usqp=CAU"
    },
    {
        dp: "https://cdn.pixabay.com/photo/2018/01/15/08/34/woman-3083453_1280.jpg", story: "https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?cs=srgb&dl=pexels-alipazani-2836486.jpg&fm=jpg"
    },
]
var storiyan= document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
storiyan .innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block "
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000)
})