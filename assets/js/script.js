"use strict";

const container = document.querySelector(".container");
const cloneContainer = container.cloneNode(true);
cloneContainer.id = "dark-container";
document.body.appendChild(cloneContainer);
cloneContainer.classList.remove("active");

const toggleIcons = document.querySelectorAll(".toggle-icon");
const icons = document.querySelectorAll(".toggle-icon i");
const darkContainer = document.querySelector("#dark-container");
const darkContainerImg = document.querySelector("#dark-container .home .home-image img");
darkContainerImg.src = "assets/images/imgDark.png";

toggleIcons.forEach((toggle) => {
    toggle.addEventListener("click", function() {
        toggle.classList.add("disabled");
        setTimeout(() => {
            toggle.classList.remove("disabled");
        }, 1500);

        icons.forEach((icon) => {
            icon.classList.toggle("bx-sun");
        });

        container.classList.toggle("active");
        darkContainer.classList.toggle("active");
    });
});