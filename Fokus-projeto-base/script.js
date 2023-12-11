const html = document.querySelector('html')
const focusBtn = document.querySelector('.app__card-button--foco')
const shortBtn = document.querySelector('.app__card-button--curto')
const longBtn = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

focusBtn.addEventListener('click', () => {
    changeContext('foco');
})

shortBtn.addEventListener('click', () => {
    changeContext('descanso-curto')
})

longBtn.addEventListener('click', () => {
    changeContext('descanso-longo')
})

function changeContext(context) {
    html.setAttribute('data-contexto', context);
    banner.setAttribute('src', `/Fokus-projeto-base/imagens/${context}.png`)
}