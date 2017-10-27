var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");



link.addEventListener("click",function (event) {
    event.preventDefault();
    popup.classList.add("show-modal-content");
});