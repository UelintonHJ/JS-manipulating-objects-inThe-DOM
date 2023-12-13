const html = document.querySelector('html');
const focusBtn = document.querySelector('.app__card-button--foco');
const shortBtn = document.querySelector('.app__card-button--curto');
const longBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');

focusBtn.addEventListener('click', () => {
    changeContext('foco');
    focusBtn.classList.add('active')
})

shortBtn.addEventListener('click', () => {
    changeContext('descanso-curto');
    shortBtn.classList.add('active')
})

longBtn.addEventListener('click', () => {
    changeContext('descanso-longo');
    longBtn.classList.add('active')
})

function changeContext(context) {
    buttons.forEach(function(context){
        context.classList.remove('active');
    })
    
    html.setAttribute('data-contexto', context);
    banner.setAttribute('src', `/Fokus-projeto-base/imagens/${context}.png`)
    
    switch (context) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`

            break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`

            break;
    
        default:
            break;
    }
}