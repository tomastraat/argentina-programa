
document.querySelector(`#button`).onclick = function () {

    let campoTexto;
    const userName = document.querySelector(`#name`); 
    const userSecondName = document.querySelector(`#second-name`);
    const userSurname = document.querySelector(`#surname`);
    const userAge = Number(document.querySelector(`#age`).value);
    let docTitle;
    
    campoTexto = (`${userName.value}, ${userSecondName.value}, ${userSurname.value}, ${userAge}`)
    document.querySelector(`#campo-texto`).innerText= campoTexto
    docTitle = (`Bienvenido ${userName.value} ${userSecondName.value}!`)
    document.querySelector(`#titulo`).innerText = docTitle
    
}

