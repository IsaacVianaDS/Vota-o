const botoes = document.querySelectorAll(".voto");

let votoRoma = 0;
let votoMaracuja = 0;
let votoMorango = 0;
let votoTomate = 0;

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    const candidato = botao.dataset.candidato;

    if (candidato === "Roma") votoRoma++;
    if (candidato === "Maracuja") votoMaracuja++;
    if (candidato === "Morango") votoMorango++;
    if (candidato === "Tomate") votoTomate++;

    document.getElementById("votoRoma").textContent = votoRoma;
    document.getElementById("votoMaracuja").textContent = votoMaracuja;
    document.getElementById("votoMorango").textContent = votoMorango;
    document.getElementById("votoTomate").textContent = votoTomate;
  });
});

document.getElementById("reiniciar").addEventListener("click", () => {
    votoRoma = 0;
    votoMaracuja = 0;
    votoMorango = 0;
    votoTomate = 0;
  
    document.getElementById("votoRoma").textContent = votoRoma;
    document.getElementById("votoMaracuja").textContent = votoMaracuja;
    document.getElementById("votoMorango").textContent = votoMorango;
    document.getElementById("votoTomate").textContent = votoTomate;
  });
  