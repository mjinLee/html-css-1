//스크롤 위치(높이)에 따라 h1의 글씨가 나타났다 사라졌다가
let mainText = document.querySelector("h1");

window.addEventListener("scroll",function(){
    let value = window.scrollY;
    console.log("scrollY",value);

    if(value>300){
        mainText.style.animation = "disappear 1s ease-out forwards";
        //forwards : disappear하고 나서 상태 유지
    }
    else{
        mainText.style.animation = "slide 1s ease-out"
    }
});