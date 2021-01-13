function menu() {
    if (document.getElementById("openGrid").style.display=="block") {
        document.getElementById("openGrid").style.display="none";
    }
    else {
        document.getElementById("openGrid").style.display="block";
    }
}

function keyCode(event) {
    var x = event.keyCode;
    if (x == 13) {
      userSearch()
    }
}

function userSearch() {
    var searchInput = document.getElementById("input").value;
    console.log(searchInput);
    window.open("https://www.google.com/search?q="+searchInput,"_self");
}