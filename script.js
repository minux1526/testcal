
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
    const B1 = document.getElementById('B1');
    const D1 = document.getElementById('D1');

    function calculer() {
        const aValue = parseFloat(A.value);
        const b1Value = parseFloat(B1.value) / 100;
        const result = aValue * b1Value;
        D1.textContent = result;
    }

    A.addEventListener('input', calculer);
    B1.addEventListener('input', calculer);
});



