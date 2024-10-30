var d=document.querySelector("#btn1")
var angl=document.querySelector("#angel")
var image=document.querySelector("#img");
var flag=0;
d.addEventListener("click",function(){

    if(flag==0)
    {
    d.innerHTML="ok"
    angl.innerHTML="Beautiful"
    image.innerHTML=""
    flag=1
    }else{
        d.innerHTML="Click Here"
        angl.innerHTML="Angel Priya"
        flag=0
    }
})