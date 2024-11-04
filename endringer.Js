function Dagsmeny(Dag) {
    //endrer style visibility så bilde ikke lenger er usynligg//
    document.getElementById("myImg").style.visibility = "visible";
    //ulik program aktiveres i forhold til verdien til Dag og vil endre det så tekst og bildet popper opp i netsiden//
    if (Dag == 0) {
        document.getElementById("demo").innerHTML = "på mandager så tilbyr vi ris med grønsaker"
        document.getElementById("myImg").src = "kantine/corn-rice.jpg";
    } else if (Dag == 1) {
        document.getElementById("demo").innerHTML = "supe med bra med næring og energi så de kan orke dagen"
        document.getElementById("myImg").src = "kantine/image.1626260158365.jpg.webp";
    } else if (Dag == 2) {
        document.getElementById("demo").innerHTML = "fisk og erter så de kan få i seg litt fisk"
        document.getElementById("myImg").src = "kantine/fish-chips-plate.jpg";
    } else if (Dag == 3) {
        document.getElementById("demo").innerHTML = "supe med bra med næring og energi så de kan orke dagen"
        document.getElementById("myImg").src = "kantine/image.1626260158365.jpg.webp";
    } else if (Dag == 4) {
        document.getElementById("demo").innerHTML = "Taco fredag så elevene kan glede seg mer til helgen"
        document.getElementById("myImg").src = "kantine/gettyimages-452506591-86dd48eb768e0af1762724d3858c0f45.webp";
    }
}

