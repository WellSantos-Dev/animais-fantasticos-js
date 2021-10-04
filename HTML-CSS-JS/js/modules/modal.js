export default function initModal() {
  const abrir = document.querySelector('[data-modal="abrir"]')
  const fechar = document.querySelector('[data-modal="fechar"')
  const container = document.querySelector('.modal-container')

  function abrirModal(event) {
    event.preventDefault()
    container.classList.add('ativo')
  }

  function fecharModal() {
    container.classList.remove('ativo')
  }

  function cliqueForaModal(e) {
    if (e.target == this) {
      fecharModal()
    }
  }

  abrir.addEventListener('click', abrirModal)
  fechar.addEventListener('click', fecharModal)
  container.addEventListener('click', cliqueForaModal)

}
