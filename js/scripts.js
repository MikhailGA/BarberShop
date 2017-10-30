var link = document.querySelector(".login");
var map_link = document.querySelector(".modal_map");

var popup = document.querySelector(".modal-content");
var popup_map = document.querySelector(".modal-content-map");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var btn_close = document.querySelectorAll(".modal-content-close");

form.addEventListener("submit",function (event) {
    if (!login.value || !password.value){
        event.preventDefault();
        alert("Не указан логин или пароль!!!");
    }
    localStorage.setItem("login",login.value);
});

link.addEventListener("click",function (event) {
    modal_content_show(event, popup);
    login.value = localStorage.getItem(("login"));
});

map_link.addEventListener("click",function (event) {
    modal_content_show(event, popup_map);
});

var i = 0;
while (i<btn_close.length){
    btn_close[i].addEventListener("click",function (event){
        modal_content_hide(event);
    })
    i++;
}

function modal_content_show(event, selector) {
    event.preventDefault();
    selector.classList.remove("hide-modal-content");
    selector.classList.add("show-modal-content");
    login.focus();
}

function modal_content_hide(event) {
    event.preventDefault();
    if (popup.classList.contains("show-modal-content")) {
        popup.classList.remove("show-modal-content");
        popup.classList.add("hide-modal-content");
    }
    if (popup_map.classList.contains("show-modal-content")) {
            popup_map.classList.remove("show-modal-content");
            popup_map.classList.add("hide-modal-content");
    }
}