
export default function initTabNav() {

  const listaAnimais = document.querySelectorAll('.animais-lista li')
  const listaContent = document.querySelectorAll('.animais-descricao section')
  listaContent[0].classList.add('ativo')

  function addClass(index) {

    listaContent.forEach((item) => {
      item.classList.remove('ativo')
    })

    listaContent[index].classList.add('ativo')
  }

  listaAnimais.forEach((item, key) => {
    item.addEventListener('click', () => {
      addClass(key)
    })
  })


}