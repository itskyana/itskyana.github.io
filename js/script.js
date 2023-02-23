// INPUT NAME PROMPT

let name = prompt("Masukkan Nama Anda");
document.getElementById("fieldname").innerHTML = name;

// CURRENT DATE
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("sender-current-time").innerHTML = today;

// VALIDATE MESSAGE FORM
function validateForm() {

    const name = document.forms["message-form"]["name"].value;
    const date = document.forms["message-form"]["date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["message"].value;

    if (name == "" || date == "" || gender == "" || message == "") {
        alert("Message Tidak Boleh Ada Yang Kosong!!!");
        return false;
    }

    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-date").innerHTML = date;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-message").innerHTML = '"' + message + '"';

    return false;
}

// SHOW IMAGE
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
   showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if ( n > imgList.length) slideIndex = 1;
    else if (n < 1 ) slideIndex = imgList.length;

    for ( i = 0; i <  imgList.length; i++ ) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 4000)