let li = document.getElementsByTagName("LI");
for (let i = 0; i < li.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}

let list = document.querySelector("ul");
list.addEventListener(
    "click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    }, false
);

function addNewEl() {
    let tempLI = document.createElement("li");
    let inputVal = document.getElementById("myInput").value;
    let t = document.createTextNode(inputVal);
    tempLI.appendChild(t);
    if (inputVal === "") {
        alert("There's nothing in the title. Please write something!");
    } else {
        document.getElementById("myUL").appendChild(tempLI);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    tempLI.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        };
    }
}
