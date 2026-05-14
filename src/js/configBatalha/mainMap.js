function pegarParametro(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    return id;
}


import { tiposMapas } from "./tiposBatalhas.js";
import { inimigos } from "./tiposBatalhas.js";
const campoBatalha = document.querySelector(".campoBatalha")

function renderizarLuta(){
    const idd = pegarParametro();
    const obj = tiposMapas.find(i =>idd == i.id);
    campoBatalha.style.backgroundImage = `url('${obj.background}')`;
}


function renderOponentes(){
    const id = pegarParametro();
    const obj = inimigos.find(i => i.id == id);
    const qtdInimigos = obj.inimigos.qtd;
    let varControle = 0;
    for(let i = 0; i < qtdInimigos; i++){
        varControle += 1;
        if(varControle % 2 === 0){
            const inimigo1 = document.createElement("div");
            const inimigo2 = document.createElement("div");
            inimigo1.classList.add("inimigo1");
            inimigo2.classList.add("inimigo2")
            campoBatalha.appendChild(inimigo1);
            campoBatalha.appendChild(inimigo2)
        }
        
    }
    
}

renderOponentes(pegarParametro());


