// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Eventos:
//focus => Quando clica
//blur => Quando sai
//change => Quando modifica


// Mostrar popup de campo obrigatório
usernameInput.addEventListener('focus', ()=> {
    //Adicionando a classe requires popup ao userNameLabel
    usernameLabel.classList.add('required-popup')
})

// Ocultar popup de campo obrigatório
usernameInput.addEventListener('blur', ()=> {
    usernameLabel.classList.remove('required-popup')
})


// Validar valor do input
usernameInput.addEventListener('change', (e)=> {
//Salvar o valor do input em uma variável    
    let valor = e.target.value
//Estrutura condicional
if(valor.length < 3){
    usernameInput.classList.add('error')
    usernameHelper.classList.add('visible')
    usernameHelper.innerText = 'O nome inserido deve conter no mínimo 3 caracteres.'
    usernameInput.classList.remove('correct')
} else{
    usernameInput.classList.add('correct')
    usernameHelper.classList.remove('visible')
    usernameInput.classList.remove('erro')
    }
})

// Validar email

const emailInput = document.getElementById('email')
const emailLabel = document.querySelector('label[for="email"]')
const emailHelper = document.getElementById('email-helper')

// Criando função para mos

function mostrarPopup (input, label){
    input.addEventListener("focus",() =>{
        label.classList.add('required-popup')
    })
    input.addEventListener("blur",() =>{
        label.classList.remove('required-popup')
    })
}
mostrarPopup(emailInput, emailLabel)

// Aplicar validação ao campo de email

emailInput.addEventListener("change", (e) => {
    let valor = e.target.value
 
// campo de condicional
if (valor.includes("@") && valor.includes(".com")){
    emailInput.classList.add("correct")
    emailInput.classList.remove("error")
    emailHelper.classList.remove("visible")
} else {
    emailInput.classList.remove("correct")
    emailInput.classList.add("error")
    emailHelper.classList.add("visible")
    emailHelper.innerText = "coloque um endereço de email válido, ele deve conter '@' e '.com' "
    }
})
