const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas das mudanças climáticas?",
        alternativas: [
            {
                texto: "Desmatamento",
                afirmacao: "O meio ambiente enfrenta desafios críticos como mudanças climáticas, poluição e perda de biodiversidade. A conservação exige ações como reduzir desmatamento, usar energias renováveis e promover práticas sustentáveis. Adotar alternativas ecológicas, como reuso de água e minimizar plásticos, é essencial para proteger e preservar o planeta para as futuras gerações."
            }, 
            {
                texto: "Aumento das Áreas Urbanas",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual prática é mais eficaz para conservar água?",
        alternativas: [
            {
                texto: "Reuso de Água",
                afirmacao: ""
            },
            {
                texto: "Uso exessivo de produtos descartáveis",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "O que é mais prejudicial para a biodiversidade?",
        alternativas: [
            {
                texto: "Poluição do Ar",
                afirmacao: ""
            },
            {
                texto: "Agricultura Sustentável",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual é uma alternativa mais ecológica ao uso de plásticos descartáveis?",
        alternativas: [
            {
                texto: "Uso de sacolas de papel",
                afirmacao: ""
            },
            {
                texto: "Utilização de produtos plásticos compostáveis",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Qual forma de energia é considerada mais limpa e renovável?",
        alternativas: [
            {
                texto: "Energia solar",
                afirmacao: ""
            },
            {
                texto: "Energia nuclear",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em resumo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
