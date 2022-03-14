document.querySelector("button").addEventListener("click", isClicked, false);

function isClicked() {
    document.querySelector("p.example").style.backgroundColor = "red";
    document.querySelector("a[target]").style.border = "2px solid red";
    document.querySelector("div>p").style.fontSize = "25px";
    document.querySelector("div>p").style.color = "red";
}

