var link = document.querySelector(".login");
var map_link = document.querySelector(".modal_map");

var popup = document.querySelector(".modal-content");
var popup_map = document.querySelector(".modal-content-map");

var btn_close = document.querySelectorAll(".modal-content-close");

link.addEventListener("click",function (event) {
    modal_content_show(event, popup);
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