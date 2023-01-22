window.addEventListener("load",function(){
    var sec1 = this.document.querySelector("#sec1");
    var titleInput = sec1.querySelector(".title-input");
    var menuListDiv = sec1.querySelector(".menu-list"); // ul
    var addButton = sec1.querySelector(".add-button");
    var delButton = sec1.querySelector(".del-button");
    addButton.onclick = function(){
        /*
        var title = titleInput.value;
        var textNode = document.createTextNode(title);
        var a = document.createElement("a");
        a.href=""; // 속성 추가
        a.appendChild(textNode);
        var li = document.createElement("li");
        li.appendChild(a);
        menuListDiv.appendChild(li);
        */
       var title = titleInput.value;
       menuListDiv.innerHTML += '<li><a href="">' + title + '</a></li>';
    };
    delButton.onclick = function(){
        var liNode = menuListDiv.children[0]; // 첫 번째 자식 노드
        menuListDiv.removeChild(liNode);
    };
});