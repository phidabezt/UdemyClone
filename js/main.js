/* TRUNCATE TITLE */
window.addEventListener("load", function () {
    truncateCardTitle();
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for (var i = 0; i < cardList.length; i++) {
        var trunc_text = cardList[i].innerHTML;
        var new_text = truncateString(trunc_text, 30);
        cardList[i].innerHTML = new_text;
    }
}

function truncateString(str, max_length) {
    if (str.length > max_length) {
        return str.slice(0, max_length) + "...";
    } else
        return str;
}

/* SIDEBAR MINI */
function outsideClick(event, notelem)	{
    notelem = $(notelem); // jquerize (optional)
    // check outside click for multiple elements
    var clickedOut = true, i, len = notelem.length;
    for (i = 0;i < len;i++)  {
        if (event.target == notelem[i] || notelem[i].contains(event.target)) {
            clickedOut = false;
        }
    }
    return clickedOut;
}

var toggleBtn = document.querySelector(".sidebarMini__button");
var sidebarMini = document.querySelector(".sidebarMini");
var switchBtn = document.querySelector("#checkbox");

window.addEventListener('click', function(e) {
    if (outsideClick(e, sidebarMini)) {
        sidebarMini.classList.remove('is-opened');
    }
 });

toggleBtn.addEventListener("click", function () {
    sidebarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener("click", function () {
    document.querySelector("body").classList.toggle('darkMode');

});




/* RESPONSIVE NAVBAR */
var switchNavBar = document.querySelector("#checkboxNavBar");

switchNavBar.addEventListener("click", function () {
    document.querySelector(".navbar-collapse").classList.remove("show");
});
