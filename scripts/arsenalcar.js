let numerosSorteados = [];
let indiceAtual = 0;
let circulosAdicionados = false;

function sortear() {
  document.querySelector("#numero-min").disabled = true;
  document.querySelector("#numero-max").disabled = true;
  document.querySelector("#quantidade").disabled = true;
  const circlesContainer = document.getElementById("conteudo-historico");
  const circles = circlesContainer.children;

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

  if (indiceAtual >= circles.length) {
    enableCampos();
    valNumerosSorteados();
    return;
  }

  let numeroSorteado;

  do {
    numeroSorteado =
      Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
  } while (numerosSorteados.includes(numeroSorteado));

  circles[indiceAtual].textContent = numeroSorteado;
  indiceAtual++;

  numerosSorteados.push(numeroSorteado);

  const resultadoSorteio = document.querySelector(".resultado-sorteio");
  resultadoSorteio.innerHTML = numeroSorteado;
  resultadoSorteio.classList.add("suspense-anime");

  setTimeout(() => {
    resultadoSorteio.classList.remove("suspense-anime");
  }, 1000);
}

function iniciarModal(modalID) {
  if (!circulosAdicionados) {
    adicionarCirculos();
    circulosAdicionados = true;
  }

  const modal = document.getElementById(modalID);
  modal.classList.add("mostrar");
  modal.addEventListener("click", (e) => {
    if (e.target.className == "fechar") {
      modal.classList.remove("mostrar");
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.classList.remove("mostrar");
    }
  });

 function adicionarCirculos() {
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const conteudoHistorico = document.getElementById("conteudo-historico");
    conteudoHistorico.innerHTML = ""; 

    for (let i = 0; i < quantidade; i++) {
      const elementResultado = document.createElement("div");
      (elementResultado.className = "resultado-valor");
      conteudoHistorico.appendChild(elementResultado);
    }

    document.querySelector("#numero-min").disabled = false;
    document.querySelector("#numero-max").disabled = false;
    document.querySelector("#quantidade").disabled = false;
  }
} 

const button = document.querySelector(".button-modal");
button.addEventListener("click", () => iniciarModal("modal-sorteio"));
