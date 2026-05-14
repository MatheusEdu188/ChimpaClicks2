export const tiposMapas = [
    {
        background: "/src/assets/imgs/ambiente2.png",
        dificuldade: 1,
        nome: "Monte Rochoso",
        descricao: "Um espaço aberto cheio de rochas que podem cair sobre você",
        musica: "...",
        level: 0,
        xp: 500,
        id: 1
    },
    {
        background: "",
        dificuldade: 2,
        nome: "Vale da Sombra",
        descricao: "Você sabe de onde vem os seus pesadelos? então... melhor não descobrir.",
        musica: "...",
        level: 10,
        xp: 2000,
        id: 2

    }
]


export const inimigos = [
    {
        id: 1,
        inimigos: {
            nome: "Anjo Caido",
            vida: 150,
            qtd: 10,
            img: "ofafa0",

        },
        boss: {
            nome: "Behebof",
            vida: 750,
            qtd: 1,
            img: "isdaf7"
        }

    },
    
]


export function renderBatalhas(){
    const list = document.getElementById("explorarList")
    tiposMapas.forEach((el)=>{
        const novoEl = document.createElement("li");
        novoEl.innerHTML = `<li class="explorarItem">
                            <img src="./src/assets/imgs/icons/coin.png" alt="">
                            <h2>${el.nome}</h2>
                            <div class="explorarDescription">
                                <p>${el.descricao}</p>
                            </div>
                            <span class="nivel">${el.level}</span>
                            <div class="divGanhos">
                                <img src="./src/assets/imgs/icons/coin.png" alt="">
                                <span class="Valor">${el.xp}XP</span>
                            </div>
                            <button data-index="${el.id}" class="btn-jogar">Jogar</button>
                        </li>`
        list.appendChild(novoEl)
        
    })
}


export function redirencionar(e){
    window.location.href = `src/pages/mapa.html?id=${e}`
}