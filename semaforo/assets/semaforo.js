const botaoVermelho = document.getElementById('vermelho');
const botaoAmarelo = document.getElementById('amarelo');
const botaoVerde = document.getElementById('verde');
const botaoAutomatico = document.getElementById('automatico');

const semaforoImg = document.getElementById('semaforoImg');

const corVermelha = () => {
    semaforoImg.src = 'assets/vermelho.png';
}

const corAmarela = () => {
    semaforoImg.src = 'assets/amarelo.png';
}
const corVerde = () => {
    semaforoImg.src = 'assets/verde.png';
}

const automatico = () => {
    automaticoInterval = setInterval(() => {
        corVermelha();
        setTimeout(corAmarela, 1000);
        setTimeout(corVerde, 2000);
    }, 3000);
}


botaoVermelho.addEventListener("click", corVermelha);
botaoAmarelo.addEventListener("click", corAmarela);
botaoVerde.addEventListener("click", corVerde);
botaoAutomatico.addEventListener("click", automatico);