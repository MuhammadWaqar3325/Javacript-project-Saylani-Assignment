// getFullYear
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function (){
    // linkContainer.classList.toggle("show-links")

    const containerHeight = linkContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
//    console.log(containerHeight)

    if (containerHeight === 0) {
        linkContainer.style.height = `${linkHeight}px`;
    }else{
        linkContainer.style.height = 0;
    }
});


