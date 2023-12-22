let choix1 = document.getElementById("choix1")
let choix2 = document.getElementById("choix2")
let choix3 = document.getElementById("choix3")
let choix4 = document.getElementById("choix4")
let choix5 = document.getElementById("choix5")
let choix6 = document.getElementById("choix6")

let out = document.getElementById("sortie")

choix1.addEventListener("click", function() {
    if (choix1.getAttribute("class") === "valid") {
        choix1.style.backgroundColor = "green"}
    else if (choix1.getAttribute("class") === "false") {
        choix1.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"}
    });

choix2.addEventListener("click", function() {
    if (choix2.getAttribute("class") === "valid") {
        choix2.style.backgroundColor = "green"}
    else if (choix2.getAttribute("class") === "false") {
        choix2.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"}
    });

choix3.addEventListener("click", function() {
    if (choix3.getAttribute("class") === "valid") {
        choix3.style.backgroundColor = "green"}
    else if (choix3.getAttribute("class") === "false") {
        choix3.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"}
    });

choix4.addEventListener("click", function() {
    if (choix4.getAttribute("class") === "valid") {
        choix4.style.backgroundColor = "green"}
    else if (choix4.getAttribute("class") === "false") {
        choix4.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"}
    });

choix5.addEventListener("click", function() {
    if (choix5.getAttribute("class") === "valid") {
        choix5.style.backgroundColor = "green"}
    else if (choix5.getAttribute("class") === "false") {
        choix5.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"}
    });

choix6.addEventListener("click", function() {
    if (choix6.getAttribute("class") === "valid") {
        choix6.style.backgroundColor = "green"}
    else if (choix6.getAttribute("class") === "false") {
        choix6.style.backgroundColor = "red";
        out.innerHTML = "BOUUUUUUUH GROS BEBE"}
    });
