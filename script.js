var heart=document.querySelector("i")
var container=document.querySelector(".container")

container.addEventListener("dblclick",function(){
    heart.style.opacity="0.7"
    heart.style.transform="translate(-50%,-50%) scale(2)"
   
    setTimeout(function(){
        heart.style.opacity="0"
    },1000)
    setTimeout(function(){
        heart.style.transform="translate(-50%,-50%) scale(1)"
    },1500)
})

