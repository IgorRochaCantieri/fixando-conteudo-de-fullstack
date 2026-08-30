function getChekedBox(){
    //Pegue todos os inputs que são do tipo checkbox e que estão marcados
    let prioridades = document.querySelectorAll('input[type="checkbox"]:checked');
    let text = "";
    for(var i=0; i<prioridades.length; i++){
        text = `${text}, ${prioridades[i].value}`;
    }

    document.getElementById('prioridades').textContent = text;
}