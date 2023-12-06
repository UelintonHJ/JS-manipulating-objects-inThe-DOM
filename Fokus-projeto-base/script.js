const html = document.querySelector('html')
const focusBtn = document.querySelector('.app__card-button--foco')
const shortBtn = document.querySelector('.app__card-button--curto')
const longBtn = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

focusBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', 'imagens/foco.png')
})

shortBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', 'imagens/descanso-curto.png')
})

longBtn.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', 'imagens/descanso-longo.png')
})