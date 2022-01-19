
window.addEventListener("load", function(){
    truncateCardTitle();
});

function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++) {
        var trunc_text = cardList[i].innerHTML;
        var new_text = truncateString(trunc_text, 36);
        cardList[i].innerHTML = new_text;
    }
}

function truncateString(str, max_length) {
    if (str.length > max_length) {
        return str.slice(0, max_length) + "...";
    } else 
        return str;
}