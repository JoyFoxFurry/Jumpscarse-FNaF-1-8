var link3 = document.querySelector(".pop-activator3");
var popupWindow3 = document.querySelector(".container3");
var closePopupWindow3 = document.querySelector(".container3");
link3.addEventListener("click", (event)=> {
    event.preventDefault();
    popupWindow3.classList.remove("popup-transform3");
});

closePopupWindow3.addEventListener("click", ()=> {
    popupWindow3.classList.add("popup-transform3");
});
