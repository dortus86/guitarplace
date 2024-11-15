//Arivar links do menu
const link = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if(url.includes(href)) {
        link.classList.add('ativo');
    }
}

link.forEach(ativarLink);



// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true  
    }
}
parametros.forEach(ativarProduto);


//Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    resposta.classList.toggle('ativa');
    const ativa =  resposta.classList.contains('ativa')
    console.log(ativa)
    pergunta.setAttribute('aria-expanded', ativa);
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Guitarras
const galeria = document.querySelectorAll(".guitarra-imagens img");
const galeriaContainer = document.querySelector(".guitarra-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    console.log(media);
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}
galeria.forEach(eventosGaleria);

// Animação

if(window.SimpleAnime) {
    new SimpleAnime();
}
