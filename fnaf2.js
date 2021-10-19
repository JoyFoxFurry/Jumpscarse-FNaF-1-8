var link2 = document.querySelector(".pop-activator2");
var popupWindow2 = document.querySelector(".container2");
var closePopupWindow2 = document.querySelector(".container2");
link2.addEventListener("click", (event)=> {
    event.preventDefault();
    popupWindow2.classList.remove("popup-transform2");
});

closePopupWindow2.addEventListener("click", ()=> {
    popupWindow2.classList.add("popup-transform2");
});
