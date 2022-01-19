// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let myIndex = 0;

changeSlidesHeader();
changeSlidesDown()

function changeSlidesHeader() {
    let i;

    let x = document.getElementsByClassName("mySlides");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1
    }

    x[myIndex - 1].style.display = "block";

    setTimeout(changeSlidesHeader, 4000); // Change image every 4 seconds
}

function changeSlidesDown() {
    let i;

    let x = document.getElementsByClassName("mySlides2");

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1
    }

    x[myIndex - 1].style.display = "block";

    setTimeout(changeSlidesDown, 4000); // Change image every 4 seconds
}


