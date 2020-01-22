const audrey = document.getElementById("audrey");

const page = document.getElementById("container");

document.addEventListener("scroll", function () {
    let width = window.scrollY / 3;
    let height = window.scrollY / 4;  

    console.log(window.scrollY)

    audrey.style.width = `${width}px`;
    audrey.style.height = `${height}px`;
})