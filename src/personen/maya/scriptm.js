function bewertung(sterne){

    document.getElementById("bewertungText").innerHTML =
    "Vielen Dank für deine Bewertung von " + sterne + " Sternen! ⭐";

}

function freundJa() {
    document.getElementById("freundAntwort").innerHTML =
        "besser is";

    document.getElementById("begruendungBox").style.display = "none";
    document.getElementById("dankeText").innerHTML = "";
}

function freundNein() {
    document.getElementById("freundAntwort").innerHTML =
        "Oh, wieso?";

    document.getElementById("begruendungBox").style.display = "block";
}

function begruendungSenden() {
    let begruendung = document.getElementById("begruendung").value;

    if (begruendung.trim() === "") {
        document.getElementById("dankeText").innerHTML =
            "BEGRUENDUNG????!!!!";
    } else {
        document.getElementById("dankeText").innerHTML =
            "Danke ! 🌸";
    }
}
