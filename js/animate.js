let backdrop
let dragonfly

window.onload = () => {
  backdrop = document.querySelector('.logo__backdrop')
  dragonfly = document.querySelector('.logo__dragonfly')

  // revealLogo()
  revealLogo()
}

function revealLogo() {
  backdrop.classList.add('logo__backdrop--reveal')
  dragonfly.classList.add('logo__dragonfly--reveal')
}

function resetLogo() {
  backdrop.classList.remove('logo__backdrop--scale')
}
