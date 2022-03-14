function on() {
    document.getElementById("overlay").style.display = "block";
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}

let overlay = document.querySelector("#overlay");
overlay.addEventListener('click', off, false);

let btn = document.querySelector("button");
btn.addEventListener('click', on, false);