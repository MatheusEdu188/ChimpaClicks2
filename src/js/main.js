import { salvarVariavelLS } from "./utils.js";
import { salvarLocalStorageArray } from "./utils.js";
import { personagem } from "./chimpa.js";


const chimpa = document.getElementById('chimpa');

const pontosChimpa = document.getElementById("pontosValue");


const dados = JSON.parse(localStorage.getItem("chimpaDados"));


if (dados) {
    personagem.pontos = dados.pontos;
    personagem.upgrade = dados.upgrade;
}

pontosChimpa.innerHTML = `${personagem.pontos}`;


function atualizarPontos() {
    personagem.pontos += personagem.upgrade;
    salvarLocalStorageArray("chimpaDados", personagem);
    pontosChimpa.innerHTML = `${personagem.pontos}`;
    console.log(personagem.pontos); 
}

chimpa.addEventListener('click', atualizarPontos);











/*upgrades */


