//scrpit calculateur de tournées

function calculer() {
    // Récupérer la valeur de A
    const A77 = parseFloat(document.getElementById('A77').value);

    // Récupérer la valeur de B1 (sans le %)
    const textB177 = document.getElementById('B177').innerText;
    const B177 = parseFloat(textB177.replace('%', '')) / 100; // Convertir en nombre décimal

    // Si A est bien un nombre, effectuer le calcul
    if (!isNaN(A77) && !isNaN(B177)) {
        const resultat = A77 * B177;

        // Afficher le résultat dans D1
        document.getElementById('D177').innerText = resultat.toFixed(2); // Limité à 2 décimales
    } else {
        // Si A n'est pas défini, on garde D1 vide
        document.getElementById('D177').innerText = ",,";
    }
}
let nombreBoucles = 5; // Default number of cycles
let tempsCycle = 0;

function decrementer() {
    if (nombreBoucles > 1) {
        nombreBoucles--;
        document.getElementById('nombreBoucles').textContent = nombreBoucles;
    }
}

function incrementer() {
    nombreBoucles++;
    document.getElementById('nombreBoucles').textContent = nombreBoucles;
}
const form = document.querySelector('form');
const resultat = document.getElementById('resultat');
const resultat1 = document.getElementById('resultat1');
const tempsEntreDeuxCycles = document.getElementById('tempsEntreDeuxCycles');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const vitesse = parseFloat(form.elements.vitesse.value);
    const distance = parseFloat(form.elements.distance.value);
    const prochaineTounee = parseFloat(form.elements.prochaineTounee.value);
    resultat.innerHTML = '';
    resultat1.innerHTML = '';
    let tempsProchaineTouneeTotal = 0;

    for (let i = 1; i <= 1; i++) {
        const tempsCycle = distance / vitesse;
        tempsProchaineTouneeTotal += prochaineTounee;

        const tempsProchaineTounee = new Date(Date.now() + tempsProchaineTouneeTotal * 60000);
        const formattedTime = `${tempsProchaineTounee.getHours()}:${String(tempsProchaineTounee.getMinutes()).padStart(2, '0')}`;
        const row = `<tr><td>${formattedTime}</td></tr>`;
        resultat.insertAdjacentHTML('beforeend', row);
    }

    let nombreBouclesElement = document.getElementById("nombreBoucles");
    let nombreBoucles = parseInt(nombreBouclesElement.textContent);

    for (let i = 1; i <= nombreBoucles; i++) {
        const tempsCycle = distance / vitesse;
        tempsProchaineTouneeTotal += tempsCycle;

        const tempsProchaineTounee = new Date(Date.now() + tempsProchaineTouneeTotal * 60000);
        const formattedTime = `${tempsProchaineTounee.getHours()}:${String(tempsProchaineTounee.getMinutes()).padStart(2, '0')}`;
        const row = `<tr><td>${formattedTime}</td></tr>`;
        resultat1.insertAdjacentHTML('beforeend', row);
    }

    const tempsEntreDeuxCyclesMinutes = (distance / vitesse).toFixed(2);
    tempsEntreDeuxCycles.textContent = `Temps tournée : ${tempsEntreDeuxCyclesMinutes} min`;
});