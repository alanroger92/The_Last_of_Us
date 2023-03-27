// alert('Olá mundo!') texto de alerta para testar.

/* OBJETIVO - QUANDO CLICARMOS NO BOTÃO TEMOS QUE MOSTRAR A IMAGEM DE FUNDO CORRESPONDENTE

- PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO HTML DOS BOTÕES;

- PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUARIO NO BOTÃO;

- PASSO 3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOR;

- PASSO 4 - MARCAR O BOTÃO CLICADO COMO SE ESTIVESSE SELECIONADO;

- PASSO 5 - ESCONDER A IMAGEM DE FUNDO ANTERIOR;

- PASSO 6 - FAZER APARECER A IMAGEM CORRESPONDENTE AO BOTÃO CLICADO ;

*/

//- PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO HTML DOS BOTÕES E DAS IMAGENS;
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//- PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUARIO NO BOTÃO;
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //- PASSO 3 - DESMARCAR O BOTÃO SELECIONADO ANTERIOR;
        desativarBotaoSelecionado();

        //- PASSO 4 - MARCAR O BOTÃO CLICADO COMO SE ESTIVESSE SELECIONADO;
        botao.classList.add('selecionado');

        //- PASSO 5 - ESCONDER A IMAGEM DE FUNDO ANTERIOR;
        esconderImagemAtiva();
        
        //- PASSO 6 - FAZER APARECER A IMAGEM CORRESPONDENTE AO BOTÃO CLICADO;
        imagens[indice].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imagemSelecionada = document.querySelector('.ativa');
    imagemSelecionada.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

