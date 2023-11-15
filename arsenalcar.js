
function sortear() {
  const numeroMin = Number(document.querySelector('#numero-min').value)
  const numeroMax = Number(document.querySelector('#numero-max').value)
  const numeroSorteado = (Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin);
  document.querySelector('.resultado-sorteio').innerHTML = numeroSorteado
  
  const elementResultado = document.createElement('div')
  elementResultado.classList.add('resultado-valores')
  elementResultado.innerText = numeroSorteado;

  const elementResultadoValores = document.querySelector('.resultado-valores')
  elementResultadoValores.append(elementResultado)
  // var historico = {
  //   numero: numeroSorteado,
  // }
  // console.log('eu não sou bom com programação ' + `${historico.numero}`)
}

