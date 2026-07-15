const startButton = document.getElementById("startButton");

const screenHome = document.getElementById("screen-home");
const screenDati = document.getElementById("screen-dati");

const nextButton = document.getElementById("nextButton");

startButton.addEventListener("click", () => {

    screenHome.classList.add("hidden");
    screenDati.classList.remove("hidden");

});

nextButton.addEventListener("click", () => {

    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const waist = document.getElementById("waist").value;

    if (
        gender === "" ||
        age === "" ||
        height === "" ||
        weight === "" ||
        waist === ""
    ) {
        alert("Compila tutti i campi.");
        return;
    }

    alert(
`Dati salvati!

Sesso: ${gender}
Età: ${age}
Altezza: ${height} cm
Peso: ${weight} kg
Vita: ${waist} cm`
    );

});
