window.addEventListener("load",function(){
    var sec1 = this.document.querySelector("#sec1"); // id
    var srcInput = sec1.querySelector(".src-input"); // class
    var changeButton = sec1.querySelector(".change-button");
    var img = sec1.querySelector(".img");
    changeButton.onclick = function(){
        img.src = "images/" + srcInput.value; // text box에 입력한 값
    };
});