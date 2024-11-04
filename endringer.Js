function Dagsmeny(Dag) {
    if (Dag == 0) {
        document.getElementById("demo").innerHTML = "på mandager så tilbyr vi ris med grønsaker"
        document.getElementById("myImg").src = "kantine/corn-rice.jpg";
    } else if (Dag == 1) {
        document.getElementById("demo").innerHTML = "Welc "
        document.getElementById("myImg").src = "kantine/image.1626260158365.jpg.webp";
    } else if (Dag == 2) {
        document.getElementById("demo").innerHTML = "Welcom "
        document.getElementById("myImg").src = "kantine/fish-chips-plate.jpg";
    } else if (Dag == 3) {
        document.getElementById("demo").innerHTML = "Wel "
        document.getElementById("myImg").src = "kantine/image.1626260158365.jpg.webp";
    } else if (Dag == 4) {
        document.getElementById("demo").innerHTML = "W"
        document.getElementById("myImg").src = "kantine/gettyimages-452506591-86dd48eb768e0af1762724d3858c0f45.webp";
    }
}

