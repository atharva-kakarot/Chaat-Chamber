let mode = document.getElementById("mode")

mode.addEventListener("click", function(){
    document.body.classList.toggle("black");
    document.body.style.transition = "0.5s";

    let header = document.querySelector("h1")

    header.classList.toggle("white");
    header.style.transition = "0.5s";

    let para = document.querySelector("p")
    
    para.classList.toggle("white");
    header.style.transition = "0.5s";
})