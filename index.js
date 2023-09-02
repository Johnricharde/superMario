// MODEL ////////////////////////////////////////////////////////////////////////////////

const app = document.getElementById('app');

var playerCharacter = "";
var playerHP = 0;

var bowserHP = 300;



// VIEW /////////////////////////////////////////////////////////////////////////////////

// CHARACTER SELECT SCREEN----------------------------------------
updateViewCharacterSelect()
function updateViewCharacterSelect() {
let html = /*HTML*/ `
    <div class="container">
        <div id="characterSelect">
            <div>
                <img src="img/mario.png"><br>
                <button onclick="chooseCharacter('mario')">Mario</button>
            </div>
            <div>
                <img src="img/luigi.png"><br>
                <button onclick="chooseCharacter('luigi')">Luigi</button>
            </div>
            <div>
                <img src="img/peach.png"><br>
                <button onclick="chooseCharacter('peach')">Peach</button>
            </div>
            <div>
                <img src="img/yoshi.png"><br>
                <button onclick="chooseCharacter('yoshi')">Yoshi</button>
            </div>
        </div>
    </div>
    `
    app.innerHTML = html;
}
// COMBAT SCREEN----------------------------------------------------
function updateViewCombat() {
    let html2 = /*HTML*/ `
        <div class="container">
            <div id="characterSelect">
                <div>
                    <img src="img/${playerCharacter}.png">
                    <h2>HP: ${playerHP}</h2>
                    <button onclick="playerAttack()">Attack</button>
                </div>
                <div>
                    <img src="img/bowser.png">
                    <h2>HP: ${bowserHP}</h2>
                    <button onclick="bowserAttack()">Attack</button>
                </div>
            </div>
        </div>
    `
    app.innerHTML = html2;
}           
       


// CONTROLLER ///////////////////////////////////////////////////////////////////////////

// Picks player character
function chooseCharacter(character) {
    playerCharacter = character;

    // Calculates playerHP based on choosen character
    if (character === "mario") {
        playerHP = 200;
    } else if (character === "luigi") {
        playerHP = 140;
    } else if (character === "peach") {
        playerHP = 100;
    } else if (character === "yoshi") {
        playerHP = 80;
    } else {console.log("Error, can't calculate playerHP")}

    updateViewCombat()
}



// Calculates Bowser's attack damage
// and inflicts it
function bowserAttack() {
    let dmg = 0;
    dmg = Math.floor(Math.random() * 6 + 1) * 2;
    playerHP -= dmg;
    console.log(`Bowser hits ${playerCharacter} for ${dmg} damage!`)

    updateViewCombat()
}
// Calculates Player's attack damage
// and inflicts it
function playerAttack() {
    let dmg = 0;
    dmg = Math.floor(Math.random() * 10 + 10);
    bowserHP -= dmg;
    console.log(`${playerCharacter} hits Bowser for ${dmg} damage!`)

    updateViewCombat()
}