window.onload = initAll;

function initAll() {
     document.getElementById("redirect").onclick = initRedirect;
     document.getElementById("Techs On The Beach").onclick = saySomething;
     document.getElementById("Lorem Sipsum").onclick = saySomething;
     document.getElementById("Drink It Sip It").onclick = saySomething;
}

function initRedirect() {
     alert("This will take you to an outside site for Kent Hack Enough");
     window.location = this;
     return false;
}

function saySomething() {
     switch(this.id) {
        case "Techs On The Beach":
           alert("Contains: Peach Juice, Orange Juice, Red Bull, Grenadine");
           break;
        case "Lorem Sipsum":
           alert("Contains: Orange Juice, Red Bull, Cranberry Juice, Grapefruit Juice, Apple Juice");
           break;
        case "Drink It Sip It":
           alert("Contains: Cranberry Juice, Orange Juice, Red Bull, Grenadine");
           break;
        default:
     }
}