let smallImages = document.querySelector(".SmallImage");
smallImages.addEventListener("click", function(event) {
    if(event.target.tagName === "IMG") {
        let src = event.target.src;
        document.querySelector("#image5").src = src;
        document.querySelector(".BigImageGroup").style.display = "block";
    }
});

let close = document.querySelector('.BigImageGroup span');
close.addEventListener("click", function(event) {
    document.querySelector(".BigImageGroup").style.display =  "none";

});

