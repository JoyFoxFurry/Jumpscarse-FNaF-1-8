var link = document.querySelector(".pop-activator");
var popupWindow = document.querySelector(".container");
var closePopupWindow = document.querySelector(".container");
link.addEventListener("click", (event)=> {
    event.preventDefault();
    popupWindow.classList.remove("popup-transform");
});

closePopupWindow.addEventListener("click", ()=> {
    popupWindow.classList.add("popup-transform");
});
