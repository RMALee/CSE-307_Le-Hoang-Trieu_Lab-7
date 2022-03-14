let timer;
let percent = 0;
let button = document.querySelector("#ClickMe");
button.addEventListener("click", clickMe, false);
function clickMe() {
    timer = setInterval(loop, 100);
    
}
function loop() {
    if(percent == 100) {
        clearInterval(timer);
    } else {
        percent++;
        document.querySelector("#Green").innerHTML = percent + "%"
        document.querySelector("#Green").style.width = percent + "%";
    }
    
}