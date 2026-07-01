const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(l => l.classList.remove("active"));

        this.classList.add("active");

    });

});

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";

    }

    else{

        nav.style.boxShadow = "none";

    }

});