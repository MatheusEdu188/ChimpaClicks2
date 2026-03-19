import { salvarLocalStorageArray } from "./utils"


const dadosSalvos = JSON.parse(localStorage.getItem("chimpaDados"));


const personagem = dadosSalvos || {
    nome: "Chimpa",
    pontos: 0,
    dano: 10,
    trofeus: 0,
    aura: 0
}


