const backButton = document.querySelector("#backTop");
const mobButton = document.querySelector(".mobile");
const navList = document.querySelector("nav ul");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#nav").style.backgroundColor = "coral";
    } else {
        document.querySelector("#nav").style.backgroundColor = "transparent";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

mobButton.addEventListener("click", toggleMenu)

backButton.addEventListener("click", topFunction);
