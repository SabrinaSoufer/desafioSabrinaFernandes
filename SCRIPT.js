const imagem1 = document.getElementById('personagem1');
const imagem2 = document.getElementById('personagem2');
const imagem3 = document.getElementById('personagem3');
const botao = document.querySelector('button');
const nomeDoPersonagem1 = document.getElementById('nome1');
const nomeDoPersonagem2 = document.getElementById('nome2');
const nomeDoPersonagem3 = document.getElementById('nome3');
const especie1 = document.getElementById('species1');
const especie2 = document.getElementById('species2');
const especie3 = document.getElementById('species3');
const condicao1 = document.getElementById('status1');
const condicao2 = document.getElementById('status2');
const condicao3 = document.getElementById('status3');

gerarValorAleatorio = () => {
    return Math.floor(Math.random()* 671);
}


traduzirCondicao = ( data ) => {
    if ( data . status == 'unknown' ) {
        return 'Não sei' ;
    } else if ( data . status == 'Alive' ) {
        return 'Sim' ;
    } else {
        return 'Não. Está morto' ;
    }
}


pegarPersonagem1 = () =>{
    let numeroAleatorio1 = gerarValorAleatorio();
    let numeroAleatorio2 = gerarValorAleatorio();
    let numeroAleatorio3 = gerarValorAleatorio();
    
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio1}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        condicao1.innerHTML = traduzirCondicao (data);
    });

    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
     method: 'GET',
     headers: {
         Accept: 'application/json',
         "Content-type": 'application/json'
     }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = traduzirCondicao(data);
    });
    fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio3}`, {
     method: 'GET',
     headers: {
         Accept: 'application/json',
         "Content-type": 'application/json'
     }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = traduzirCondicao(data);
    });
return

}

botao.onclick = pegarPersonagem1;