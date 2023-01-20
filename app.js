const buttons = document.querySelectorAll('button');
let playerPoints = new Number;
let cpuPonints = new Number;
const computerSelection = function () {
    let options = [
        'piedra',
        'papel',
        'tijera'
    ];
    let answer = options[~~(Math.random()*(options.length-1)).toFixed()];
    return answer;
};
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerSelection());
    });
});
function playRound(pS, cS) {
    if ((pS == 'piedra' && cS == 'tijera') || (pS == 'papel' && cS == 'piedra') || (pS == 'tijera' && cS == 'papel')) {
        playerPoints++;
        contador(playerPoints);
    } else if ((cS == 'piedra' && pS == 'tijera') || (cS == 'papel' && pS == 'piedra') || (cS == 'tijera' && pS == 'papel')) {
        cpuPonints++;
        contador(cpuPonints);
    };
    winer(playerPoints, cpuPonints);
};
function contador() {
    const playerMarker = document.querySelector('#playerPoint');
    const cpuMarker = document.querySelector('#cpu');
    playerMarker.innerHTML = `<h1>${playerPoints}</h1>`;
    cpuMarker.innerHTML = `<h1>${cpuPonints}</h1>`;
};
function winer(pP, cP) {
    if (pP === 5 || cP === 5) {
       if (pP > cP) {
        alert(`Ganaste`);
        location.reload()
        } else if (cP > pP) {
            alert(`Perdiste`);
            location.reload()
        };
    };
};