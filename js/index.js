const links = document.querySelectorAll("a");


links.forEach(link => {
    link.addEventListener("mouseover", function() {
        link.style.color = "DeepPink";
    });


    link.addEventListener("mouseout", function() {
        link.style.color = "Lavender";
    });
});
