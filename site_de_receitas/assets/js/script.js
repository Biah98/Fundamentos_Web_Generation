let nome= document.querySelector('#nome')
let email= document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk= false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width= '90%'
nome.style.margin= '20px'
email.style.width= '90%'
email.style.margin= '20px'
assunto.style.width= '90%'
assunto.style.margin= '20px'


function validarNome(){
    let txtNome= document.querySelector('#txtNome')

    if(nome.value.length < 3){
        txtNome.innerHTML= 'Nome Inválido'
        txtNome.style.color= 'red'
    }else{
        nomeOk= 'true'
        txtNome.innerHTML='Ok'
        txtNome.style.color= 'green'
    }
}

function validarEmail(){
    let txtEmail= document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML= 'E-mail Inválido'
        txtEmail.style.color= 'red'
    }else{
        emailOk= 'true'
        txtEmail.innerHTML= 'Ok'
        txtEmail.style.color= 'green'
    }
}

function validarAssunto(){
    let txtAssunto= document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML= 'O texto ultrapassou o limite de caracteres'
        txtAssunto.style.backgroundColor= 'red'
        txtAssunto.style.display= 'block'
    }else{
        assuntoOk= 'true'
        txtAssunto.innerHTML= 'Ok'
        txtAssunto.style.backgroundColor= 'green'
    }
}

function enviar(){
    if(nomeOk==true){
     alert('Enviado com sucesso!')
    }else{
     alert('Preencha os campos corretamente!')
    }
 }

 function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
 }

 function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'     
 }
 