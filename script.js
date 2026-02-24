const canticos = [
  {
    titulo: "Eis-me Aqui, Senhor",
    tempo: "Tempo Comum",
    parte: "Entrada",
  },
  {
    titulo: "Prova de Amor Maior",
    tempo: "Quaresma",
    parte: "Comunhão",
  },
  {
    titulo: "Cristo Ressuscitou",
    tempo: "Páscoa",
    parte: "Entrada",
  },
];

const lista = document.getElementById("listaCanticos");
const filtro = document.getElementById("filtroTempo");

function mostrarCanticos(listaFiltrada) {
  lista.innerHTML = "";

  listaFiltrada.forEach((cantico) => {
    const div = document.createElement("div");
    div.classList.add("cantico");

    div.innerHTML = `
      <strong>${cantico.titulo}</strong><br>
      Tempo: ${cantico.tempo}<br>
      Parte: ${cantico.parte}
    `;

    lista.appendChild(div);
  });
}

mostrarCanticos(canticos);

filtro.addEventListener("change", function () {
  const valorSelecionado = filtro.value;

  if (valorSelecionado === "todos") {
    mostrarCanticos(canticos);
  } else {
    const filtrados = canticos.filter((c) => c.tempo === valorSelecionado);
    mostrarCanticos(filtrados);
  }
});
