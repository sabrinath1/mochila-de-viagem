const form = document.getElementById('novoId')
form.addEventListener('submit', evento => {
  evento.preventDefault()

  criaElemento(evento.target.elements[('nome'.value, quantidade)])
})

function criaElemento(nome, quantidade) {}
