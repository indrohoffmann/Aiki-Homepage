let uudisedBtn = document.getElementById("menubutton1");
let infoBtn = document.getElementById("menubutton2");
let mediaBtn = document.getElementById("menubutton3");
let sanatBtn = document.getElementById("menubutton4");
let contactBtn = document.getElementById("menubutton5");
let confirmClosetBtn = document.getElementById('confirmCloseBtn');



let contentUudised = document.getElementById("content-uudised");
let contentInfo = document.getElementById("content-info");
let contentMedia = document.getElementById("content-media");
let contentSanat = document.getElementById("content-sanat");
let contentContact = document.getElementById("content-contact");
let contactConfirm = document.getElementById("contactConfirm");



var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menu');
var closeMenuBtn = document.getElementById('closeMenuBtn');
var menuBtn1 = document.getElementById('menubutton1');
var menuBtn2 = document.getElementById('menubutton2');
var menuBtn3 = document.getElementById('menubutton3');
var menuBtn4 = document.getElementById('menubutton4');
var menuBtn5 = document.getElementById('menubutton5');


// Menu button click event handler
menuBtn.onclick = function() {
    menu.classList.add('show');
};

// Close menu button click event handler
closeMenuBtn.onclick = function() {
    menu.classList.remove('show');
};

menuBtn1.onclick = function() {
    menu.classList.remove('show');
}

menuBtn2.onclick = function() {
    menu.classList.remove('show');
}

menuBtn3.onclick = function() {
    menu.classList.remove('show');
}

menuBtn4.onclick = function() {
    menu.classList.remove('show');
}

menuBtn5.onclick = function() {
    menu.classList.remove('show');
}



contentInfo.style.display = "none";
contentMedia.style.display = "none";
contentSanat.style.display = "none";
contentContact.style.display = "none";
contactConfirm.style.display = "none";

uudisedBtn.addEventListener("click", () => {
    contentInfo.style.display = "none";
    contentMedia.style.display = "none";
    contentSanat.style.display = "none";
    contentUudised.style.display = "";
    contentContact.style.display = "none";
    uudisedBtn.classList.add("active");
    infoBtn.classList.remove("active");
    mediaBtn.classList.remove("active");
    sanatBtn.classList.remove("active");
    contactBtn.classList.remove("active");

});

infoBtn.addEventListener("click", () => {
    contentInfo.style.display = "";
    contentMedia.style.display = "none";
    contentUudised.style.display = "none";
    contentSanat.style.display = "none";
    contentContact.style.display = "none";
    uudisedBtn.classList.remove("active");
    infoBtn.classList.add("active");
    mediaBtn.classList.remove("active");
    sanatBtn.classList.remove("active");
    contactBtn.classList.remove("active");
});

mediaBtn.addEventListener("click", () => {
    contentInfo.style.display = "none";
    contentMedia.style.display = "";
    contentUudised.style.display = "none";
    contentSanat.style.display = "none";
    contentContact.style.display = "none";
    uudisedBtn.classList.remove("active");
    infoBtn.classList.remove("active");
    mediaBtn.classList.add("active");
    sanatBtn.classList.remove("active");
    contactBtn.classList.remove("active");
});

sanatBtn.addEventListener("click", () => {
    contentInfo.style.display = "none";
    contentMedia.style.display = "none";
    contentUudised.style.display = "none";
    contentSanat.style.display = "";
    contentContact.style.display = "none";
    uudisedBtn.classList.remove("active");
    infoBtn.classList.remove("active");
    mediaBtn.classList.remove("active");
    sanatBtn.classList.add("active");
    contactBtn.classList.remove("active");

});

contactBtn.addEventListener("click", () => {
    contentInfo.style.display = "none";
    contentMedia.style.display = "none";
    contentUudised.style.display = "none";
    contentSanat.style.display = "none";
    contentContact.style.display = "";
    uudisedBtn.classList.remove("active");
    infoBtn.classList.remove("active");
    mediaBtn.classList.remove("active");
    sanatBtn.classList.remove("active");
    contactBtn.classList.add("active");
});

var contactform = document.getElementById('contactform')
contactform.addEventListener('submit', function (e) {
    e.preventDefault()
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value


    /*Contact formi tööle saamiseks*/
    fetch("https://backend.vunki.eu/mail", {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                message: message,
                email: email
            }),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            }
        })
        .then(function (response) {
            if (response.status == 200) {
                console.log('Mail sent')
                document.getElementById('contactConfirm').style.display = "block";
            } else {
                response.json().then(function (data) {
                    console.log(data.error)
                })
            }
        })
    confirmClosetBtn.onclick = function () {
        document.getElementById('contactConfirm').style.display = "none";

    }

})