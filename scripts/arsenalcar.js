let numerosSorteados = [];

function sortear() {
  document.querySelector("#numero-min").disabled = true;
  document.querySelector("#numero-max").disabled = true;

  const numeroMin = Number(document.querySelector("#numero-min").value);
  const numeroMax = Number(document.querySelector("#numero-max").value);

  if (numeroMin < 0 || numeroMax < 0) {
    enableCampos();
    valNumerosPositivos();
    return;
  }

  if (numeroMin === 0 || (numeroMax === 0 && numeroMin === "") || numeroMax === "" ) {
    enableCampos();
    valCampoInvalido();
    return;
  }

  if (numeroMax <= numeroMin) {
    enableCampos();
    valMineMax();
    return;
  }

  if (numerosSorteados.length === numeroMax - numeroMin + 1) {
    enableCampos();
    valNumerosSorteados()
    return;
  }

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

  const elementResultadoValores = document.querySelector(".conteudo-historico");
  elementResultadoValores.appendChild(elementResultado);

  function enableCampos() {
    document.querySelector("#numero-min").disabled = false;
    document.querySelector("#numero-max").disabled = false;
  }
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
