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
}

pontosChimpa.innerHTML = `${personagem.pontos}`;

function atualizarPontos() {
  personagem.pontos += personagem.upgrade;
  salvarLocalStorageArray("chimpaDados", personagem);
  pontosChimpa.innerHTML = `${personagem.pontos}`;
  console.log(personagem.pontos);
}

chimpa.addEventListener("click",()=>{
  atualizarPontos();
});
  













/*upgrades */

const upgradesContainer = document.getElementById("upgradesList");

function carregarUpgrades() {
  upgrades.forEach((upgrade) => {
    const upgradeElement = document.createElement("li");
    upgradeElement.classList.add("upgradeItem");
    upgradeElement.innerHTML = `
            <div class="upgradeHeader">
                  <img class="imgUpgrade" src="./src/assets/imgs/upgrades/coinIconUpgrade.png" alt="Img">
                    <span>${upgrade.nome}</span>
            </div>
            <div class="upgradeDescription">
                  <p>${upgrade.descricao}</p>
                  <span class="Valor"><img src="./src/assets/imgs/icons/coin.png" alt="coin">${upgrade.custo}</span>
    
            </div>
            <button class="btn-comprar-upgrade" data-index="${upgrade.id}">Comprar</button>
        `;
    upgradesContainer.appendChild(upgradeElement);
  });
}


carregarUpgrades();








const btnComprarUpgrades = document.querySelectorAll(".btn-comprar-upgrade");

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








btnComprarUpgrades.forEach((button) => {
  button.addEventListener("click", () => {
    const index = button.getAttribute("data-index");
    const upgrade = upgrades.find((u) => u.id == index);
    if (personagem.pontos >= upgrade.custo) {
      personagem.pontos -= upgrade.custo;
      personagem.upgrade += upgrade.ponto;
      salvarLocalStorageArray("chimpaDados", personagem);
      pontosChimpa.innerHTML = `${personagem.pontos}`;
    } else {
      alert("Pontos insuficientes para comprar este upgrade.");
    }
  });
});
