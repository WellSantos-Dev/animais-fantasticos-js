export default function initAccordion() {
  const faqDT = document.querySelectorAll('.faq-lista dt')

  function addClass() {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
  }

  faqDT.forEach((item) => {
    item.addEventListener('click', addClass)
  })
}