window.addEventListener("load",function(){
    var sec1 = this.document.querySelector("#sec1");
    var srcInput = sec1.querySelector(".src-input");
    var imgSelect = sec1.querySelector(".img-select"); //
    var changeButton = sec1.querySelector(".change-button");
    var img = sec1.querySelector(".img");
    changeButton.onclick = function(){
        //img.src = "images/" + srcInput.value;
        img.src = "images/"+imgSelect.value;
    };
});