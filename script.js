const screens = document.querySelectorAll(".screen");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");

const data = {};

function showScreen(id, percent) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    progress.style.width = percent + "%";
    progressText.innerText = percent + "%";

}

document.getElementById("btnStart").onclick = () => {

    showScreen("step1",20);

};

document.getElementById("goStep2").onclick = () => {

    data.gender = document.getElementById("gender").value;
    data.age = document.getElementById("age").value;
    data.height = document.getElementById("height").value;
    data.weight = document.getElementById("weight").value;
    data.waist = document.getElementById("waist").value;

    if(
        data.gender==="" ||
        data.age==="" ||
        data.height==="" ||
        data.weight==="" ||
        data.waist===""){
        alert("Compila tutti i campi.");
        return;
    }

    showScreen("step2",50);

};

document.getElementById("back1").onclick = () => {

    showScreen("step1",20);

};

document.getElementById("goStep3").onclick = () => {

    data.chest=document.getElementById("chest").value;
    data.hips=document.getElementById("hips").value;
    data.arm=document.getElementById("arm").value;
    data.leg=document.getElementById("leg").value;

    showScreen("step3",75);

};

document.getElementById("back2").onclick = () => {

    showScreen("step2",50);

};

document.getElementById("goReport").onclick = () => {

    data.goal=document.getElementById("goal").value;

    const bmi=(data.weight/Math.pow(data.height/100,2)).toFixed(1);

    document.getElementById("results").innerHTML=`

<h3>Risultato</h3>

<p><strong>BMI:</strong> ${bmi}</p>

<p><strong>Sesso:</strong> ${data.gender}</p>

<p><strong>Età:</strong> ${data.age}</p>

<p><strong>Altezza:</strong> ${data.height} cm</p>

<p><strong>Peso:</strong> ${data.weight} kg</p>

<p><strong>Vita:</strong> ${data.waist} cm</p>

<p><strong>Obiettivo:</strong> ${data.goal}</p>

`;

    showScreen("report",100);

};

document.getElementById("back3").onclick = () => {

    showScreen("step3",75);

};
