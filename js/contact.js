let cbtn = document.getElementById('correobtn');
let divc = document.getElementById('correo');

cbtn.addEventListener('click', (e) => {
    divc.innerHTML = `<div id="correos">jpalacio172@misena.edu.co</div>
    <style> #correos{float: left;
        margin-left: 25px;
        height: 20px;
        padding-top: 10px;
        width: 600px;
        color:white;
        border-radius: 10px;
        background-color: #245970;
        text-align: center;
        margin-bottom: 20px;}</style>`
    console.log("btn correo presionado")
})

let cebtn = document.getElementById('celularbtn');
let divce = document.getElementById('celular');

cebtn.addEventListener('click', (e) => {
    divce.innerHTML = `<div id="celulard">+57 3194606488</div>
    <style> #celulard{float: left;
        margin-left: 25px;
        height: 20px;
        padding-top: 10px;
        width: 600px;
        color:white;
        border-radius: 10px;
        background-color: #245970;
        text-align: center;
        margin-bottom: 20px;}</style>`
    console.log("btn correo presionado")
})