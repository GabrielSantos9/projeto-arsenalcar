let numerosSorteados = [];

function sortear() {
    const numeroMin = Number(document.querySelector("#numero-min").value);
    const numeroMax = Number(document.querySelector("#numero-max").value);

    let numeroSorteado;

    do {
        numeroSorteado = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
    } while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);

    document.querySelector(".resultado-sorteio").innerHTML = numeroSorteado;

    const elementResultado = document.createElement("div");
    elementResultado.classList.add("resultado-valor");
    elementResultado.innerText = numeroSorteado;

    const elementResultadoValores = document.querySelector(".conteudo-historico");
    elementResultadoValores.appendChild(elementResultado);
}


function mostrarHistorico() {
  const container = document.querySelector('.historico');

  if(container.style.display === 'none') {
    container.style.display = 'flex';
  } else {
    container.style.display = 'none';
  }
};



