const number = document.getElementById("number");
const dices = document.getElementById("dices");
const dices_img = document.getElementById("dices_img");

function roll() {
    let dicesA = [];
    let dices_imgA = [];

    let numberOfRolls = Number(number.value);

    for (let i = 0; i < numberOfRolls; i++) {
        let value = Math.floor(Math.random() * 6) + 1
        dicesA.push(value);
        dices_imgA.push(`<img src="images/${value}.png">`);
    }

    console.log(dicesA);
    console.log(dices_imgA);

    dices.innerHTML = dicesA.join(', ');
    dices_img.innerHTML = dices_imgA.join('');
}
