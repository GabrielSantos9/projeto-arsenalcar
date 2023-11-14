
function sortear() {
  const numeroMin = Number(document.querySelector('#numero-min').value)
  const numeroMax = Number(document.querySelector('#numero-max').value)
  const numeroSorteado = (Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin);
  const elementResultado = document.createComment('div')
  elementResultado.classList.add('resultado-valores')
  elementResultado.innerText = numeroSorteado;

  const elementResultadoValores = document.querySelector('resultado-valores')
  elementResultadoValores.append('a')
  // var historico = {
  //   numero: numeroSorteado,
  // }
  // console.log('eu não sou bom com programação ' + `${historico.numero}`)
  document.querySelector('.resultado-sorteio').innerHTML = numeroSorteado
}

