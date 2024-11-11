# Kantine meny

## programeringspråk:
Javascript, html og css

## funksjonen til netsiden
netsiden er ganske enkel for brukere alt de trenger å gjøre er å trykke på meny knappene som vil sende dem til neste side og de andre knappene

## viktigst program i JS
den vikgtigste koden til JS er delt opp i html, css og JS til html så har jeg denne koden

det den første linjen gjør er å lagge en tom tekst del der vis man skriver mellom >< så får man tekst inne i netsiden der dellen er samtidig så har den id verdi demo som blir da brukt til JS funksjonen jeg har som jeg vill forklare snart.
neste linje og siste er eda div med en classe i seg som hetter imgbox det som kjer er at hva en css har gitt imgbox vill kje med det som er mellom div som den tredje linjen. Der skapper man et tomt img box som har id="myImg" denne delen skal også bli brukt til JS koden.

```
          <p id="demo"></p>
          <div class="imgbox">
          <img id="myImg" src="#" width="200" height="200">
          </div>
```

#### css relatert til JS
Det den gjør ganske enkelt er å gjøre så classen imgbox gjemmer alt som den har puttet sin verdi i som det tomme img fordi vis jeg ikke hadde hat den så kunne man fortsat ha set veggen til bildet med et spørsmålstegn i miten fordi den har ikke noe bildet.
```
.imgbox {
  visibility: hidden;
}
```

#### JS
koden du ser her er en del av js koden men resten følger nesten den samme repitisjonen så jeg viser bare det jeg trenger for å forklare koden.
Det JS koden gjør er å skape en funskjon som heter Dagsmeny som krever en verdi som vil da bli verdien til variabelen Dag. så når funskjonen blir kalt så må det stå et tall eller noe annet for at funksjonen faktisk kan aktivere i dette tilfele så er det tall.
det første funksjonen gjør er å først i andre linje gå til css og finner classen myImg og endrer visibiliyet som før var hidden til visible grunen til dett er at nå skal et bildet bli plassert i img fra html.

etter det så vil programet gå igjennom et if program som da i forhold til verdien til variabelen Dag aktivere en av linjene etter if så si verdien til Dag er 0 da vil den først finne i html den som har Id="demo" som i dette tilfele var den tome tekst koden. da vill den gjøre så tekst koden har teksten som er mellom "" etter innerHTML =.
Etter det så vil det gjøre det samme igjen bare med ID="myImg" og vil istede endre det så img har faktisk et bildet.

```
function Dagsmeny(Dag) {
    document.getElementById("myImg").style.visibility = "visible";
    if (Dag == 0) {
        document.getElementById("demo").innerHTML = "på mandager så tilbyr vi ris med grønsaker (30)kr"
        document.getElementById("myImg").src = "kantine/corn-rice.jpg";
    } else if (Dag == 1) {
        document.getElementById("demo").innerHTML = "supe med bra med næring og energi så de kan orke dagen (30kr)"
        document.getElementById("myImg").src = "kantine/image.1626260158365.jpg.webp";
```
Det er 5 forkjelige verdier funksjonen kan bli kalt som da blir aktivert av disse knapene som er programert i html.
```         
          <button onclick="Dagsmeny('0')" class="button">Mandag</button>
          <button onclick="Dagsmeny('1')" class="button">Tirsdag</button>
          <button onclick="Dagsmeny('2')" class="button">Onsdag</button>
          <button onclick="Dagsmeny('3')" class="button">Torsdag</button>
          <button onclick="Dagsmeny('4')" class="button">Fredag</button>
```
som du ser enkelt forklart i programet når kanppen blir trykket så vil funksjonen Dagsmeny som er i JS bli aktivert med en av de verdiene 0 til 4.

## HTML
den viktigste koden til html var navbaren som blir brukt til å navigere fra side til side
```
        <div class="nav">
          <ul>
            <li><a href="Forside.html">Forside</a></li>
            <li><a class="active">Dagsmeny</a></li>
            <li><a href="Ingredienser.html">Faste varer</a></li>
          </ul>
        </div>
```
class="active" enkelt forklart er den siden man er på som enkelt endrer kanppen til grønn så man forstår man er på den siden og kan ikke trykke på den i motsetnign til href som vil sende brukeren til en annen side.

```
.nav {
    float: left;
    width: 17%;
    height: 300px;
 
    padding: 20px;
}
  
.nav ul {
    list-style-type: none;
    padding: 0;
}
```
section dette er 2 nav classer men den enne vil abre aktivere vis programet er også omringet av ul som kanppene er. Det den enkelt gjør er å putte knappene i en usynlig box på venstre side med en lengde på 17% av netsiden så den endre seg fra kjerm til kjerm og har en høyde på 300px som kan bli endret dette gjør så vis knappene tar opp mer lengde så vill de bare bli kastet et eller anet sted på netsiden.
Den andre koden nav ul gjør bare så de stacker på toppen av hverandre
```
li a {
    display: block;
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
  }
  
li a.active {
    background-color: #04AA6D;
    color: white;
  }
  
li a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
```
disse tre her er er classer som bare reagerer vis programet er omringet av li og a som kanppene gjør den første er å lagge boksene til knappene med en størelse på 8pixel tror jeg i høyde og 16 i lengde, fargen er for bokstavene så de blir svarte og text decoration gjør bare så de ikke ser noe spesielt ut.
den andre er classen som blir deklarert på den netsiden man er på som gjør så boksen er grønn og bokstavene hvit.
Den tredje og siste aktiveres og deaktiveres når en en av boksene har en pil over seg og endrer bakgrunnen til grønn og bokstavene hvit .active betyr at den ikke reagerer på bokser med ekstra classen active.

## kilder
koden jeg brukte for å få det tome bildet usynlig
https://www.w3schools.com/css/tryit.asp?filename=trycss_display

koden jeg brukte for å gjøre det mulig å bytte tekst og bilde i Javascript
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_img_src2

koden jeg brutke til å lagge layoute til netsiden min
https://www.w3schools.com/html/html_layout.asp


## tilbakemelding

### oppgaver
•	ha to skjermer delt samtidig for å se om netsiden ser fortsatt bra ut
•	Trykk på navbarene.
•	Trykk på dagene.
### spørsmål og svar
•	Så nettsiden fortsatt finn ut når den ble mindre.
Den så fortsatt fin ut når netsiden ble mindre når kjermen ble splittet opp
•	Er teksten klar og tydelig.
Teksten er klar og tydelig
•	Hvar navigasjonen enkel og fin.
Enkelt og fint
•	Var informasjon om hva hver dag tilbe hørte bra.
Finn men ville ha vært fint vis allergisk innehold sto ved siden av hva maten var til mandag til fredag.
### hva jeg burde gjøre
Jeg burde kansje programere det slikk at når en dag blir trykket så vil risiko for alergi stå ved siden av bildet.
