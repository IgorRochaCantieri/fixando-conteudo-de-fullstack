function getChekedBox(){
    //Pegue todos os inputs que são do tipo checkbox e que estão marcados
    let prioridades = document.querySelectorAll('input[type="checkbox"]:checked');
    // Treinando objeto DOM ==  o document.querySelector('input') pega primeiro input
    let objetoInput = document.querySelector('input');

    let text = "";
    for(var i=0; i<prioridades.length; i++){
        text = `${text}, ${prioridades[i].value}`;
    }

    document.getElementById('prioridades').textContent = text;

    console.log(objetoInput.name);
    console.log(objetoInput.value);
    console.log(objetoInput.type);
    console.log(objetoInput.checked);
}