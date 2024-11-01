
function additionner() {
    const A = document.getElementById('A').value;
    const B = document.getElementById('B').value;
    const C = document.getElementById('C').value;
    const D = document.getElementById('D').value;
    const E = document.getElementById('E').value;
    const F = document.getElementById('F').value;
    const resultat = parseInt(A) + parseInt(B) + parseInt(C) + parseInt(D) + parseInt(E) + parseInt(F);
    document.getElementById('resultat').textContent = resultat;

}
document.addEventListener('DOMContentLoaded', () => {
    const A = document.getElementById('A');
    const B = document.getElementById('B');
    const B1 = document.getElementById('B1');
    const B2 = document.getElementById('B2');
    const B3 = document.getElementById('B3');
    const B4 = document.getElementById('B4');
    const B5 = document.getElementById('B5');
    const B6 = document.getElementById('B6');
    const B7 = document.getElementById('B7');
    const B8 = document.getElementById('B8');
    const B9 = document.getElementById('B9');
    const B10 = document.getElementById('B10');
    const B11 = document.getElementById('B11');
    const B12 = document.getElementById('B12');
    const B13 = document.getElementById('B13');
    const B14 = document.getElementById('B14');
    const B15 = document.getElementById('B15');
    const B16 = document.getElementById('B16');
    const B17 = document.getElementById('B17');
    const B18 = document.getElementById('B18');
    const B19 = document.getElementById('B19');
    const B20 = document.getElementById('B20');
    const B21 = document.getElementById('B21');

    const D1 = document.getElementById('D1');
    const D2 = document.getElementById('D2');
    const D3 = document.getElementById('D3');
    const D4 = document.getElementById('D4');
    const D5 = document.getElementById('D5');
    const D6 = document.getElementById('D6');
    const D7 = document.getElementById('D7');
    const D8 = document.getElementById('D8');
    const D9 = document.getElementById('D9');
    const D10 = document.getElementById('D10');
    const D11 = document.getElementById('D11');
    const D12 = document.getElementById('D12');
    const D13 = document.getElementById('D13');
    const D14 = document.getElementById('D14');
    const D15 = document.getElementById('D15');
    const D16 = document.getElementById('D16');
    const D17 = document.getElementById('D17');
    const D18 = document.getElementById('D18');
    const D19 = document.getElementById('D19');
    const D20 = document.getElementById('D20');
    const D21 = document.getElementById('D21');


    function calculer() {
        const aValue = parseFloat(A.value);
        const bValue = parseFloat(B.value);
        const b1Value = parseFloat(B1.value) / 100;
        const b2Value = parseFloat(B2.value) / 100;
        const b3Value = parseFloat(B3.value) / 100;
        const b4Value = parseFloat(B4.value) / 100;
        const b5Value = parseFloat(B5.value) / 100;
        const b6Value = parseFloat(B6.value) / 100;
        const b7Value = parseFloat(B7.value) / 100;
        const b8Value = parseFloat(B8.value) / 100;
        const b9Value = parseFloat(B9.value) / 100;
        const b10Value = parseFloat(B10.value) / 100;
        const b11Value = parseFloat(B11.value) / 100;
        const b12Value = parseFloat(B12.value) / 100;
        const b13Value = parseFloat(B13.value) / 100;
        const b14Value = parseFloat(B14.value) / 100;
        const b15Value = parseFloat(B15.value) / 100;
        const b16Value = parseFloat(B16.value) / 100;
        const b17Value = parseFloat(B17.value) / 100;
        const b18Value = parseFloat(B18.value) / 100;
        const b19Value = parseFloat(B19.value) / 100;
        const b20Value = parseFloat(B20.value) / 100;
        const b21Value = parseFloat(B21.value) / 100;

        const resultB1 = aValue * b1Value;
        const resultB2 = aValue * b2Value;
        const resultB3 = aValue * b3Value;
        const resultB4 = aValue * b4Value;
        const resultB5 = bValue * b5Value;
        const resultB6 = bValue * b6Value;
        const resultB7 = aValue * b7Value;
        const resultB8 = aValue * b8Value;
        const resultB9 = aValue * b9Value;
        const resultB10 = aValue * b10Value;
        const resultB11 = aValue * b11Value;
        const resultB12 = aValue * b12Value;
        const resultB13 = aValue * b13Value;
        const resultB14 = aValue * b14Value;
        const resultB15 = aValue * b15Value;
        const resultB16 = aValue * b16Value;
        const resultB17 = aValue * b17Value;
        const resultB18 = aValue * b18Value;
        const resultB19 = aValue * b19Value;
        const resultB20 = aValue * b20Value;
        const resultB21 = aValue * b21Value;

        D1.textContent = resultB1.toFixed(2);
        D2.textContent = resultB2.toFixed(2);
        D3.textContent = resultB3.toFixed(2);
        D4.textContent = resultB4.toFixed(2);
        D5.textContent = resultB5.toFixed(2);
        D6.textContent = resultB6.toFixed(2);
        D7.textContent = resultB7.toFixed(2);
        D8.textContent = resultB8.toFixed(2);
        D9.textContent = resultB9.toFixed(2);
        D10.textContent = resultB10.toFixed(2);
        D11.textContent = resultB11.toFixed(2);
        D12.textContent = resultB12.toFixed(2);
        D13.textContent = resultB13.toFixed(2);
        D14.textContent = resultB14.toFixed(2);
        D15.textContent = resultB15.toFixed(2);
        D16.textContent = resultB16.toFixed(2);
        D17.textContent = resultB17.toFixed(2);
        D18.textContent = resultB18.toFixed(2);
        D19.textContent = resultB19.toFixed(2);
        D20.textContent = resultB20.toFixed(2);
        D21.textContent = resultB21.toFixed(2);

        function calculerTempsRestant25(result, element) {
            const tempsRestantHeures = 25 / result;
            const heures = Math.floor(tempsRestantHeures);
            const minutes = Math.round((tempsRestantHeures - heures) * 60);
            const tempsAffichage = isNaN(heures) || isNaN(minutes) ? "-" : heures + "h" + minutes + "m"
            element.textContent = tempsAffichage;
        }
        function calculerTempsRestant24(result, element) {
            const tempsRestantHeures = 24 / result;
            const heures = Math.floor(tempsRestantHeures);
            const minutes = Math.round((tempsRestantHeures - heures) * 60);
            const tempsAffichage = isNaN(heures) || isNaN(minutes) ? "-" : heures + "h" + minutes + "m"
            element.textContent = tempsAffichage;
        }
        calculerTempsRestant25(resultB1, E1);
        calculerTempsRestant24(resultB2, E2);
        calculerTempsRestant24(resultB3, E3);
        calculerTempsRestant24(resultB4, E4);
        calculerTempsRestant24(resultB5, E5);
        calculerTempsRestant24(resultB6, E6);
        calculerTempsRestant24(resultB7, E7);
        calculerTempsRestant24(resultB8, E8);
        calculerTempsRestant24(resultB9, E9);
        calculerTempsRestant24(resultB10, E10);
        calculerTempsRestant24(resultB11, E11);
        calculerTempsRestant24(resultB12, E12);
        calculerTempsRestant24(resultB13, E13);
        calculerTempsRestant24(resultB14, E14);
        calculerTempsRestant24(resultB15, E15);
        calculerTempsRestant24(resultB16, E16);
        calculerTempsRestant24(resultB17, E17);
        calculerTempsRestant24(resultB18, E18);
        calculerTempsRestant24(resultB19, E19);
        calculerTempsRestant24(resultB20, E20);
        calculerTempsRestant24(resultB21, E21);
    }
    A.addEventListener('input', calculer);
    B.addEventListener('input', calculer);
    B1.addEventListener('input', calculer);
    B2.addEventListener('input', calculer);
    B3.addEventListener('input', calculer);
    B4.addEventListener('input', calculer);
    B5.addEventListener('input', calculer);
    B6.addEventListener('input', calculer);
    B7.addEventListener('input', calculer);
    B8.addEventListener('input', calculer);
    B9.addEventListener('input', calculer);
    B10.addEventListener('input', calculer);
    B11.addEventListener('input', calculer);
    B12.addEventListener('input', calculer);
    B13.addEventListener('input', calculer);
    B14.addEventListener('input', calculer);
    B15.addEventListener('input', calculer);
    B16.addEventListener('input', calculer);
    B17.addEventListener('input', calculer);
    B18.addEventListener('input', calculer);
    B19.addEventListener('input', calculer);
    B20.addEventListener('input', calculer);
    B21.addEventListener('input', calculer);

});



