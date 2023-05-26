const lista = document.querySelectorAll('[data-lista]');

function selecionaCotacao(nome, valor) {
    lista.forEach((listaEscolhida) => {
        console.log(lista)

        if (listaEscolhida.id == nome){
            imprimeContacao(listaEscolhida, nome, valor);
        }
    })
}

function imprimeContacao(lista, nome, valor){
    lista.innerHTML = '';
const plurais = {
    "dolar": "7Coins",
    "iene": "ienes"
}
    for (let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10){
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome: plurais[nome]}: R$${(valor * multiplicador).toFixed(2)}`
        lista.appendChild(listaItem)
    }
}
export default selecionaCotacao;