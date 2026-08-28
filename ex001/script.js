function displayRadioValue(){
    let elementos = document.getElementsByName('gender');

    for(var i=0; i<elementos.length; i++){
        if(elementos[i].checked){
            document.getElementById("resultado").innerHTML = "Gênero: " + elementos[i].value;
        }
    }
}