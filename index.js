let imageEl=document.getElementById("image");
let iconEl=document.getElementById("icon");
let colorEl=document.getElementById("color");
let change=false;

function clickgo(){
    if(change){
        imageEl.src="happy dog image.jpeg";
        colorEl.style.background="blue";
        iconEl.style.color="blue";
        colorEl.style.color="white";
        change=false;



    }
    else{
        imageEl.src="dog sad-images.jpg"
        colorEl.style.background="grey"
        iconEl.style.color="grey"
        change=true;

    }
}
