let numerosSorteados = [];

function sortear() {
  const numeroMin = Number(document.querySelector("#numero-min").value);
  const numeroMax = Number(document.querySelector("#numero-max").value);

  let numeroSorteado;

  do {
    numeroSorteado =
      Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
  } while (numerosSorteados.includes(numeroSorteado));
  console.log(`numero`, numeroSorteado);
  numerosSorteados.push(numeroSorteado);

  document.querySelector(".resultado-sorteio").innerHTML = numeroSorteado;

  const elementResultado = document.createElement("div");
  elementResultado.classList.add("resultado-valor");
  elementResultado.innerText = numeroSorteado;

  const elementResultadoValores = document.querySelector(".conteudo-historico");
  elementResultadoValores.appendChild(elementResultado);
  
}

function iniciarModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.className == "fechar") {
      modal.classList.remove("mostrar");
    }
  });
}

const button = document.querySelector(".button");
button.addEventListener("click", () => iniciarModal("modal-sorteio"));
