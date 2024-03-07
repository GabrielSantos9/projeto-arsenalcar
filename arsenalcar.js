let numerosSorteados = [];

function sortear() {
  const numeroMin = Number(document.querySelector("#numero-min").value);
  const numeroMax = Number(document.querySelector("#numero-max").value);

  if (numeroMin >= 0 && numeroMax >= numeroMin) {
    let numeroSorteado;

    do {
      numeroSorteado =
        Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
    } while (numerosSorteados.includes(numeroSorteado));

    numerosSorteados.push(numeroSorteado);

    document.querySelector(".resultado-sorteio").innerHTML = numeroSorteado;

    const elementResultado = document.createElement("div");
    elementResultado.classList.add("resultado-valor");
    elementResultado.innerText = numeroSorteado;

    const elementResultadoValores = document.querySelector(
      ".conteudo-historico"
    );
    elementResultadoValores.appendChild(elementResultado);
    if (numerosSorteados.length === numeroMax - numeroMin + 1) {
      reiniciarSorteio();
      alert(
        "Todos os números possíveis foram sorteados. O sorteio será reiniciado."
      );
      return;
    }
    if (numeroMin === 0 || numeroMax === 0) {
      alert("Por favor, preencha os campos do sorteio.");
    }
  } else {
    alert("Por favor, insira números positivos.");
  }
}

function reiniciarSorteio() {
  numerosSorteados = [];
  numerosPossiveis = [];

  document.querySelector(".resultado-sorteio").innerHTML = "";
  document.querySelector(".conteudo-historico").innerHTML = "";
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
