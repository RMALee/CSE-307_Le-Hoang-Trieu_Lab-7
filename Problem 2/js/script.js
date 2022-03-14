document.querySelector("button").addEventListener("click", isClicked, false);

function isClicked() { 

    const q1 = document.querySelectorAll("p.example");
    q1[0].style.backgroundColor = "red";

    const q2 = document.querySelectorAll(".example");
    for (let i = 0; i < q2.length; i++) {
        q2[i].style.margin = "20px";
        q2[i].style.padding = "20px";
        q2[i].style.border = "2px solid red";
    }

    const q3= document.querySelectorAll("a[target]");
    for (let i = 0; i < q3.length; i++) {
        q3[i].style.border = "2px solid red";
        q3[i].style.textDecoration = "none";
    }

    const q4= document.querySelectorAll("h1.Title");
    for (let i = 0; i < q4.length; i++) {
        q4[i].style.color = 'red';
    }
    const q5 = document.querySelectorAll("h2.Title");
    for (let i = 0; i < q5.length; i++) {
        q5[i].style.color = 'red';
    }

}