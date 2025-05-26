const botoes = document.querySelectorAll(".voto");

let Roma = 0;
let Maracujar = 0;
let Morango = 0;
let Tomate = 0;


botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const candidato = botao.dataset.candidato;

    if (candidato === "a") danilo++;
    if (candidato === "b") votosb++;
    if (candidato === "c") votosc++;

    document.getElementById("votosa").textContent = danilo;
    document.getElementById("votosb").textContent = lucas;
    document.getElementById("votosc").textContent = gabriel;
  });
});
