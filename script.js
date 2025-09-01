const html = document.querySelector('html');    
const buttons = document.querySelectorAll('.app__card-button');
const timerDisplay = document.getElementById('timer');
const startPauseBtn = document.getElementById('start-pause');
const toggleMusica = document.getElementById('alternar-musica');
const bannerImage = document.querySelector('.app__image');
const startPauseIcon = startPauseBtn.querySelector('img');

const alarme = new Audio('sons/beep.mp3');
const somPlay = new Audio('sons/play.wav');
const somPause = new Audio('sons/pause.mp3');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true

function atualizarBotaoIcone() {
    if(estaRodando) {
        startPauseIcon.src = 'imagens/pause.png';
    } else {
        startPauseIcon.src = 'imagens/play_arrow.png'
    }
}

function atualizarBanner(contexto) {
    if (contexto === 'foco') bannerImage.src = 'imagens/foco.png';
    if (contexto === 'descanso-curto') bannerImage.src = 'imagens/descanso-curto.png';
    if (contexto === 'descanso-longo') bannerImage.src = 'imagens/descanso-longo.png';
}

let tempo = 25 * 60;
let intervalo = null;
let estaRodando = false;

function formatarTempo(segundos) {
    const m = String(Math.floor(segundos / 60)).padStart(2, '0');
    const s = String(segundos % 60).padStart(2, '0');
    return `${m}:${s}`;
};

function atualizarDisplay() {
    timerDisplay.textContent = formatarTempo(tempo);
};

function setarTempo(contexto) {
    if (contexto === 'foco') tempo = 25 * 60;
    if (contexto === 'descanso-curto') tempo = 5 * 60;
    if (contexto === 'descanso-longo') tempo = 15 * 60;
    atualizarDisplay();
};

function alternarTimer() {
    if (estaRodando) {
        clearInterval(intervalo)
        estaRodando = false;
        startPauseBtn.querySelector('span').textContent = 'Começar';
        somPause.play();
    } else {
        intervalo = setInterval(() => {
            if (tempo > 0) {
                tempo --;
                atualizarDisplay();
            } else {
                clearInterval(intervalo)
                estaRodando = false;
                startPauseBtn.querySelector('span').textContent = 'Começar';

                alarme.play();
                alert('⏰ Tempo encerrado!');
            }
        }, 1000);
        estaRodando = true
        startPauseBtn.querySelector('span').textContent = 'Pausar';
        somPlay.play();
    };
    atualizarBotaoIcone();
};

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const contexto = btn.dataset.contexto;

        html.setAttribute('data-contexto', contexto);
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        clearInterval(intervalo);
        estaRodando = false;
        startPauseBtn.querySelector('span').textContent = 'Começar';
        setarTempo(contexto);
        atualizarBanner(contexto);
    });
});

startPauseBtn.addEventListener('click', alternarTimer);

toggleMusica.addEventListener('change', () => {
    if (toggleMusica.checked) {
        musica.play();
    } else {
        musica.pause();
    }
});

setarTempo('foco');