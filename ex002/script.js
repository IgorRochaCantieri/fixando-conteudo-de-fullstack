function getOption(){
    // a varialvel opcoes é a referencia do elemento que tem id=select1 e nao apenas o valor.
    let opcoes = document.querySelector('#select1');

    document.querySelector('.output').textContent = opcoes.value;
}