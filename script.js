const botoes = document.querySelectorAll(".voto");

let Roma = 0;
let Maracujar = 0;
let Morango = 0;
let Tomate = 0;


botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const candidato = botao.dataset.candidato;

    if (candidato === "Roma") votoRoma++;
    if (candidato === "Maracujar") votoMaracujar++;
    if (candidato === "Morango") votoMorango++;
    if (candidato === "Tomate") votoTomate++;

    document.getElementById("votoRoma").textContent = Roma;
    document.getElementById("votoMaracujar").textContent = Maracujar;
    document.getElementById("votoMorango").textContent = Morango;
    document.getElementById("votoTomate").textContent = Tomate;
  });
});
