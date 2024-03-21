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

  if (
    numeroMin === 0 ||
    (numeroMax === 0 && numeroMin === "") ||
    numeroMax === ""
  ) {
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
    valNumerosSorteados();
    return;
  }

  let numeroSorteado;

  do {
    numeroSorteado =
      Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
  } while (numerosSorteados.includes(numeroSorteado));

  numerosSorteados.push(numeroSorteado);

  const resultadoSorteio = document.querySelector(".resultado-sorteio");
  resultadoSorteio.innerHTML = numeroSorteado;
  resultadoSorteio.classList.add("suspense-number");

  const historicoSorteio = document.querySelector(".conteudo-historico");
  const elementResultado = document.createElement("div");
  elementResultado.classList.add("resultado-valor", "suspense-number");
  elementResultado.innerText = numeroSorteado;
  historicoSorteio.appendChild(elementResultado);

  setTimeout(() => {
    resultadoSorteio.classList.remove("suspense-number");
    elementResultado.classList.remove("suspense-number"); // Remova a classe suspense-number após a animação
  }, 1000);
}

function iniciarModal(modalID) {
  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.className == "fechar") {
      modal.classList.remove("mostrar");
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modal.classList.remove("mostrar");
    }
  });
}

const button = document.querySelector(".button");
button.addEventListener("click", () => iniciarModal("modal-sorteio"));
