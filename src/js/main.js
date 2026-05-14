import { salvarVariavelLS } from "./utils.js";
import { salvarLocalStorageArray } from "./utils.js";
import { personagem } from "./chimpa.js";
import { upgrades } from "./upgrades.js";

const chimpa = document.getElementById("chimpa");

const pontosChimpa = document.getElementById("pontosValue");

const dados = JSON.parse(localStorage.getItem("chimpaDados"));

if (dados) {
  personagem.pontos = dados.pontos;
  personagem.upgrade = dados.upgrade;
  personagem.dano = dados.dano;
}

pontosChimpa.innerHTML = `${formatarNumero(personagem.pontos)}`;

function atualizarPontos() {
  personagem.pontos += personagem.upgrade;
  salvarLocalStorageArray("chimpaDados", personagem);
  pontosChimpa.innerHTML = `${formatarNumero(personagem.pontos)}`;
  console.log(personagem.pontos);
}

chimpa.addEventListener("click",()=>{
  atualizarPontos();
});
  













/*upgrades */

const upgradesContainer = document.getElementById("upgradesList");

function carregarUpgrades(tipo) {
  upgradesContainer.innerHTML = "";
  let tipoUp = []
    if(tipo === "todos"){
      tipoUp = upgrades.filter(i => i.id >= 0);
    } else{
      tipoUp = upgrades.filter(i => i.tipo.toLocaleLowerCase().includes(tipo));
    }
    tipoUp.forEach((upgrade) => {
      const upgradeElement = document.createElement("li");
      upgradeElement.classList.add("upgradeItem");
      upgradeElement.innerHTML = `
              <div class="upgradeHeader">
                    <img class="imgUpgrade" src="./src/assets/imgs/upgrades/coinIconUpgrade.png" alt="Img">
                      <span>${upgrade.nome}</span>
              </div>
              <div class="upgradeDescription">
                    <p>${upgrade.descricao}</p>
                    <span class="Valor"><img src="./src/assets/imgs/icons/coin.png" alt="coin">${formatarNumero(upgrade.custo)}</span>
      
              </div>
              <button class="btn-comprar-upgrade" data-index="${upgrade.id}">Comprar</button>
          `;
      upgradesContainer.appendChild(upgradeElement);
    });
  
}


carregarUpgrades("todos");




const tipoUpgrade = document.getElementById("tipoUpgrade");


tipoUpgrade.addEventListener("input", ()=>{
  const valor = tipoUpgrade.value
  console.log(valor);
  
  carregarUpgrades(valor)
})









const btnFecharUpgrades = document.getElementById("btn-fechar-upgrades");

const btnAbriUpgrades = document.getElementById("btn-abrirUpgrades")
const upgradesSection = document.querySelector(".upgrades");

function fecharUpgrades(){
  upgradesSection.style.display = "none";
}

function abrirUpgrades(){
  upgradesSection.style.display = "block";
}


btnFecharUpgrades.addEventListener("click", ()=>{
  fecharUpgrades()
}
)



btnAbriUpgrades.addEventListener("click", ()=>{
  abrirUpgrades();
})








upgradesContainer.addEventListener("click", (event) => {
  const button = event.target.closest(".btn-comprar-upgrade");
  if (!button) return;

  const index = button.getAttribute("data-index");

  const upgrade = upgrades.find((u) => u.id == index);

  if (personagem.pontos >= upgrade.custo) {
    const upgradeTipo = upgrade.tipo;

    personagem.pontos -= upgrade.custo;

    if (upgradeTipo === "coin") {
      personagem.upgrade += upgrade.ponto;
    } else if (upgradeTipo === "forca") {
      personagem.dano += upgrade.ponto;
    }

    salvarLocalStorageArray("chimpaDados", personagem);
    pontosChimpa.innerHTML = `${formatarNumero(personagem.pontos)}`;
  } else {
    alert("Pontos insuficientes para comprar este upgrade.");
  }
});


















/* formatação de numeros */


function formatarNumero(num) {
  if (num < 1e12) {
    return num.toLocaleString("pt-BR", {
      notation: "compact",
      maximumFractionDigits: 1
    });
  }

  const unidades = ["K","M","B","T","Qa","Qi","Sx","Sp","Oc","No"];
  let i = -1;

  while (num >= 1000 && i < unidades.length - 1) {
    num /= 1000;
    i++;
  }

  return num.toFixed(2) + unidades[i];
}





/*API para chegar a data e hora e atualizar loja do jogo*/


import { checarData } from "./dataAPI.js";

checarData();









/*explorar*/


import { renderBatalhas } from "./configBatalha/tiposBatalhas.js";
import { redirencionar } from "./configBatalha/tiposBatalhas.js";
const explorar = document.querySelector(".explorar");
const btnFecharExplorar = document.getElementById("btn-fechar-explorar");
const btnAbrirExplorar = document.getElementById("btn-abrir-explorar");
const explorarList = document.getElementById("explorarList")

renderBatalhas()


btnAbrirExplorar.addEventListener("click", ()=>{
  explorar.style.display = "block"
})




btnFecharExplorar.addEventListener("click", ()=>{
  explorar.style.display = "none"  
})

explorarList.addEventListener("click", (event)=>{
  const itemClickado = event.target;
  const local = itemClickado.closest(".btn-jogar");
  if(local){
    const index = local.dataset.index;
    redirencionar(index);

    
  }

})

